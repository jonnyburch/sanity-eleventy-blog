export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '5f4b807983248d6e65f6ba9f',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-7yrwoxm4',
                  apiId: '0a9de556-9860-43b8-b672-d428adad9bc0'
                },
                {
                  buildHookId: '5f4b8079302549be957485c8',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-v68xbg2s',
                  apiId: '24776554-b286-4cc7-88de-90552f464f1a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jonnyburch/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-v68xbg2s.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
