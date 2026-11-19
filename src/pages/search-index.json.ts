// src/pages/search-index.json.ts
import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export interface SearchItem {
  title: string;
  subtitle: string;
  category: 'Program' | 'Annual Edition' | 'People' | 'Archive' | 'Page';
  url: string;
  keywords: string;
}

export const GET: APIRoute = async () => {
  const [programs, people, archives] = await Promise.all([
    getCollection('programs'),
    getCollection('people'),
    getCollection('archives'),
  ]);

  const index: SearchItem[] = [
    // Core Static Pages
    {
      title: 'About Us — Serving the People, the Angat Way',
      subtitle: 'History, Mission, and Vision of ANGAT Iskolar PUP',
      category: 'Page',
      url: '/about-us',
      keywords: 'about us history mission vision established october 7 2022 iskolar para sa bayan',
    },
    {
      title: 'AIP Community & Organizational Structure',
      subtitle: 'Executive Officers, Standing Committees, and Committee Officers',
      category: 'Page',
      url: '/community',
      keywords: 'community executive officers lead convener secretary general finance standing committees',
    },
    {
      title: 'Get Involved & Donation Channels',
      subtitle: 'Support our causes via monetary or in-kind donations',
      category: 'Page',
      url: '/get-involved',
      keywords: 'donate donation qr code bdo gcash in-kind support volunteer get involved',
    },
  ];

  // Index Programs & Nested Annual Editions
  for (const program of programs) {
    const programUrl = `/programs-impact/${program.id}`;
    const committeeLabel = program.data.committee
      ? program.data.committee.replace('Committee on ', '')
      : program.data.category;

    index.push({
      title: program.data.title,
      subtitle: `${program.data.program_type || 'Flagship Program'} • ${committeeLabel}`,
      category: 'Program',
      url: programUrl,
      keywords: [
        program.data.title,
        program.data.program_type,
        program.data.committee,
        program.data.category,
        program.data.excerpt,
        program.body,
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase(),
    });

    if (program.data.editions && program.data.editions.length > 0) {
      for (const ed of program.data.editions) {
        const sessionTitle = ed.title?.trim() || `${program.data.title} ${ed.year}`;
        index.push({
          title: sessionTitle,
          subtitle: `${program.data.title} (${ed.year})`,
          category: 'Annual Edition',
          url: programUrl,
          keywords: [
            sessionTitle,
            program.data.title,
            ed.year,
            ed.summary,
            program.data.committee,
            program.data.category,
          ]
            .filter(Boolean)
            .join(' ')
            .toLowerCase(),
        });
      }
    }
  }

  // Index People / Officers
  for (const person of people) {
    index.push({
      title: person.data.title,
      subtitle: `${person.data.role} (${person.data.term_year})`,
      category: 'People',
      url: '/our-people',
      keywords: [person.data.title, person.data.role, person.data.term_year, person.body]
        .filter(Boolean)
        .join(' ')
        .toLowerCase(),
    });
  }

  // Index Archives & Documents
  for (const doc of archives) {
    index.push({
      title: doc.data.title,
      subtitle: `${doc.data.category} • ${doc.data.year}`,
      category: 'Archive',
      url: '/archives',
      keywords: [doc.data.title, doc.data.category, doc.data.year, doc.body]
        .filter(Boolean)
        .join(' ')
        .toLowerCase(),
    });
  }

  return new Response(JSON.stringify(index), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};