import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/consentia/',
    component: ComponentCreator('/consentia/', '7da'),
    routes: [
      {
        path: '/consentia/',
        component: ComponentCreator('/consentia/', '3a9'),
        routes: [
          {
            path: '/consentia/',
            component: ComponentCreator('/consentia/', '418'),
            routes: [
              {
                path: '/consentia/analise-financeira-tecnica',
                component: ComponentCreator('/consentia/analise-financeira-tecnica', '381'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/consentia/entendimento-problema',
                component: ComponentCreator('/consentia/entendimento-problema', '2d5'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/consentia/equipe',
                component: ComponentCreator('/consentia/equipe', '077'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/consentia/impacto',
                component: ComponentCreator('/consentia/impacto', 'ae9'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/consentia/roadmap',
                component: ComponentCreator('/consentia/roadmap', '039'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/consentia/solucao',
                component: ComponentCreator('/consentia/solucao', '8b4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/consentia/',
                component: ComponentCreator('/consentia/', '368'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
