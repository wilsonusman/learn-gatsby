export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe39b5f26325a00dcc78729',
                  title: 'Sanity Studio',
                  name: 'learn-gatsby-studio',
                  apiId: '971023df-b3cf-4d05-beea-05a0e33a42ab'
                },
                {
                  buildHookId: '5fe39b5fdfeb84010b2f2229',
                  title: 'Portfolio Website',
                  name: 'learn-gatsby-web',
                  apiId: 'cbfd2e06-4332-4e3d-a452-6156aed13dab'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wilsonusman/learn-gatsby',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://learn-gatsby-web.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
