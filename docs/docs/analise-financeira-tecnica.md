---
id: analise-financeira-tecnica
title: Análise Financeira e Técnica
sidebar_position: 6
---

# Análise Financeira e Técnica

## Premissas e Modelo de Custo

&emsp;Para estimar a viabilidade financeira da Consentia, consideramos um cenário de comitê de ética que analisa mil protocolos por ano, aproximadamente oitenta e três por mês, em uma instituição de grande porte. Em média, cada protocolo consome entre três e cinco horas somando secretaria e pareceristas, incluindo leitura inicial, conferência documental, ida e volta de correções e emissão do parecer. A hipótese da Consentia é reduzir esse esforço direto em pelo menos quarenta por cento em casos padrão, por meio de triagem inteligente, padronização e melhoria na qualidade do TCLE antes da análise humana.

&emsp;O custo da plataforma pode ser decomposto em três blocos principais. Primeiro, computação em nuvem, incluindo armazenamento de documentos, processamento de modelos de linguagem e execução dos agentes. Segundo, licenciamento e operação de modelos de inteligência artificial, quando aplicável, levando em conta chamadas por mil tokens ou janelas de contexto utilizadas. Terceiro, suporte, observabilidade, monitoramento de segurança e manutenção de integrações com sistemas legados, como Plataforma Brasil e bancos de dados internos.

&emsp;Uma forma simplificada de modelar o custo mensal é

`C_mensal = C_cloud + C_modelos + C_suporte`

&emsp;O custo unitário por protocolo, considerando N_protocolos_mensal, é dado por

`C_protocolo = C_mensal / N_protocolos_mensal`


## Ganhos de Eficiência e Retorno sobre Investimento

&emsp;O principal benefício financeiro da Consentia está na redução de tempo de trabalho humano por protocolo, sem perda de qualidade ou segurança. Se um protocolo padrão consome quatro horas de trabalho somando secretaria e pareceristas e a Consentia reduz esse esforço para duas vírgula cinco horas em média, há uma economia de uma vírgula cinco hora por protocolo. Para mil protocolos por ano, isso representa mil e quinhentas horas de trabalho recuperadas.

&emsp;Podemos traduzir essa economia em valor monetário assumindo um custo médio por hora da equipe envolvida. Se considerarmos um valor de oitenta reais por hora, a economia anual aproximada é dada por

`Economia_anual = N_protocolos * delta_horas * C_hora`

&emsp;Além da economia direta de horas, existem ganhos indiretos importantes. Estudos iniciam antes, o que reduz risco de perda de financiamento, atrasos em cronogramas e oportunidades perdidas de publicação e colaboração. Em ambientes de pesquisa clínica, esses atrasos podem ter impacto financeiro ainda maior, pois determinadas linhas de estudo estão vinculadas a contratos de pesquisa, metas regulatórias e janelas específicas de recrutamento.

 O retorno sobre investimento pode ser aproximado como a razão entre benefícios anuais líquidos e o custo anual da solução, ou seja, o benefício financeiro gerado ao longo do ano dividido pelo custo para manter a plataforma em produção no mesmo período. Quando a economia anual ultrapassa com folga esse custo, o investimento se torna vantajoso. Em cenários de grande volume, a tendência é que essa relação seja ainda mais favorável, pois os custos fixos se diluem e a automação reduz a necessidade de expansão do quadro de funcionários.

## Arquitetura Técnica, Escalabilidade e Confiabilidade

&emsp;A viabilidade técnica da Consentia se apoia em uma arquitetura de orquestração multiagente baseada em modelos de linguagem, frameworks de agentes e serviços em nuvem. O fluxo começa com ingestão segura de documentos, seguida por extração estruturada, avaliação normativa, análise de risco, análise de clareza do TCLE e geração de parecer preliminar. Cada etapa é encapsulada em agentes, enquanto o orquestrador controla chamadas, pesos de confiança, reconciliação de conflitos e registro detalhado de logs.

&emsp;O tempo médio de processamento por protocolo depende principalmente do tempo de inferência dos modelos de linguagem envolvidos. Se um protocolo consome cinco chamadas de um modelo de grande porte com latência de alguns segundos por chamada, o tempo de resposta técnico tende a ser de poucos minutos. Em escala institucional, é possível usar filas distribuídas e paralelização para processar vários protocolos simultaneamente.

`capacidade_por_hora = (N_workers * 3600) / T_medio_protocolo`

&emsp;Se cada worker completa um protocolo em cento e oitenta segundos, um único worker processa vinte protocolos por hora. Com cinco workers, a capacidade sobe para cem protocolos por hora, desconsiderando sobrecargas e tempos de fila. Ajustando o número de workers conforme a demanda, a arquitetura permanece escalável.

&emsp;Questões de segurança e conformidade são resolvidas com criptografia em trânsito e em repouso, segregação por instituição, controle de acesso baseado em perfis e trilhas de auditoria completas para cada decisão. Logs de orquestração registram qual modelo foi acionado, qual versão foi usada, quais regras foram aplicadas e quais trechos sustentaram cada recomendação. Esses dados permitem auditorias técnicas, ajustes de ontologias de risco e monitoramento de viés ou deriva dos modelos.

&emsp;A combinação de um modelo de custo claro, ganhos significativos de eficiência operacional e uma arquitetura técnica escalável reforça a viabilidade financeira e tecnológica da Consentia co
