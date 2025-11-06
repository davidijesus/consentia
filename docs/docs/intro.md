---
id: sumario-executivo
title: Sumário Executivo
sidebar_position: 0
slug: /
---

## Contexto

Universidades, hospitais e centros de pesquisa vivem um gargalo na análise ética de estudos com seres humanos. O volume de protocolos submetidos aos CEPs/CONEP cresce, enquanto equipes e ferramentas permanecem limitadas. O resultado é fila, revisões heterogêneas e baixa rastreabilidade das decisões, afetando prazos de projetos, captação de recursos e publicações. Hoje, grande parte do processo é manual: leitura de protocolos extensos, checagem de normas (CNS 466/12, LGPD, ICH-GCP, GDPR), avaliação de riscos e análise de TCLE, sem padronização nem trilhas de auditoria consistentes.

## Contexto e Justificativa

O problema central não é apenas capacidade, mas a ausência de automação, padronização e explicabilidade. Processos fragmentados em e-mails, PDFs e planilhas elevam o retrabalho e a variância entre pareceres. Uma camada de IA multiagente, com governança e XAI, pode transformar triagem, checagens e documentação — sem substituir o juízo humano.

## Proposta de Solução

Consentia é uma infraestrutura ética que orquestra agentes de IA para triagem e apoio à decisão em pesquisas com seres humanos. O sistema extrai dados essenciais de protocolos e anexos, aplica normas por meio de uma ontologia de conformidade, avalia riscos (físicos, psicológicos e de privacidade), analisa a clareza e suficiência do TCLE e gera um parecer preliminar explicável, no padrão da Plataforma Brasil, para revisão humana obrigatória.

## Como funciona

Quatro camadas compõem o núcleo:  
AgentDoc (NLP+RAG) para leitura contextual e extração de entidades críticas; AgentLaw (compliance) para requisitos normativos e evidências por regra; AgentRisk e AgentConsent para scoring de risco e legibilidade/suficiência do TCLE; e AgentWriter com o Orquestrador para consolidação, resolução de conflitos, trilhas XAI e emissão do parecer preliminar.  
Fluxo: upload → extração → regras aplicáveis → risco/TCLE → consolidação → parecer preliminar → revisão do CEP.

## Modelo de Monetização

SaaS B2B/B2G para instituições acadêmicas e hospitais, com licença anual por volume de protocolos e usuários. Módulos premium opcionais (plágio, integridade de dados, anonimização, detecção de dados sintéticos) e serviços de onboarding, treinamento e integração via API (export de parecer, sem decisão automática).

## Público-Alvo Inicial

CEPs de universidades e hospitais universitários com alto volume de protocolos e prazos críticos (ex.: multicêntricos e ensaios clínicos), com expansão para pesquisa clínica privada, psicologia digital e plataformas de teste com usuários.

## Estratégia de Implementação

- Piloto de 90 dias com 30–50 protocolos históricos cegados e 10 atuais.  
- Integrações por API, SSO e políticas de acesso; segurança alinhada à LGPD (minimização, criptografia, data-silos e retenção configurável).  
- Governança de IA com versionamento, auditoria de vieses e monitoramento de deriva.

## Impactos Estratégicos Esperados

- Tempo de triagem de semanas para ≤ 24h em casos padrão (hipótese a validar).  
- Redução de retrabalho em submissões (TCLE/documentação) em 30–40%.  
- Concordância ≥ 85% com parecer humano de referência.  
- Padronização e rastreabilidade por meio de logs de regras, fontes e versões de modelos.

## Visão de Futuro

Consentia evolui para um modelo de “Ethics-as-a-Service” interoperável: ontologias compartilháveis, marketplace de agentes (plágio, anonimização, integridade experimental), certificações de segurança (ex.: ISO 27001) e integração ampla com ecossistemas acadêmicos e clínicos. IA orquestra. Humanos decidem. Ética que escala.
