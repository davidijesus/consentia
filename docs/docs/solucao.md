---
id: solucao
title: Solução
sidebar_position: 3
---

## Visão Geral da Plataforma

&emsp;A Consentia é uma infraestrutura ética que utiliza orquestração de agentes de inteligência artificial para apoiar o processo de avaliação de pesquisas científicas com seres humanos. A solução atua como uma camada de preparação, triagem e análise preliminar dos protocolos submetidos aos comitês de ética. O sistema é construído para acelerar o processo de avaliação, padronizar critérios e oferecer explicabilidade completa em cada recomendação gerada.

&emsp;A plataforma recebe documentos como protocolos, anexos metodológicos e TCLE em formatos comuns como PDF ou DOCX. A partir desse ponto, a orquestração de agentes inicia um fluxo de análise estruturado que extrai informações essenciais, identifica riscos, verifica aderência normativa e avalia a clareza do TCLE. O resultado final é um parecer preliminar explicável que serve como insumo para o julgamento humano.

&emsp;A solução funciona como suporte e nunca como substituição do parecerista. O foco é melhorar a qualidade e a previsibilidade das análises, reduzir retrabalho e ampliar a rastreabilidade do processo. Toda recomendação emitida vem acompanhada de justificativas, citações normativas, fontes e registros detalhados da decisão.

## Componentes Principais da Orquestração

&emsp;A arquitetura da Consentia se organiza em torno de um orquestrador central que coordena cinco agentes especializados. Cada agente é responsável por uma parte da análise e contribui com informações específicas para compor o parecer preliminar. A combinação de diferentes agentes permite que a solução trate o protocolo a partir de múltiplas perspectivas.

&emsp;O AgentDoc é responsável por extrair dados criteriosamente dos documentos submetidos. Ele identifica variáveis essenciais do estudo, elementos metodológicos, critérios de inclusão e exclusão e informações estruturais do TCLE. Esse agente garante que todos os itens relevantes sejam destacados de maneira consistente.

&emsp;O AgentLaw atua como verificador de aderência normativa. Ele cruza as informações extraídas com diretrizes como CNS 466, LGPD, GDPR e ICH-GCP. Sua função é alertar sobre possíveis violações, lacunas ou incongruências que possam impactar a avaliação ética do estudo.

&emsp;O AgentRisk analisa riscos físicos, psicológicos, sociais e digitais relacionados ao protocolo. Ele avalia a gravidade, a probabilidade e a mitigação proposta pelo pesquisador. Esse agente também identifica populações vulneráveis e condições especiais que exigem maior rigor normativo.

&emsp;O AgentConsent verifica a estrutura, clareza e acessibilidade do TCLE. Ele identifica trechos confusos, termos técnicos sem explicação e pontos que precisam de maior transparência. A análise inclui indicadores de legibilidade e recomendações concretas de melhoria.

&emsp;O AgentWriter junta as contribuições dos agentes anteriores e elabora o parecer preliminar. Ele organiza todas as evidências produzidas, destaca justificativas e compila recomendações de forma clara e rastreável. Esse parecer funciona como um insumo direto para o parecerista humano.

## Resultados e Benefícios da Solução

&emsp;A Consentia produz como saída um parecer preliminar explicável, acompanhado de trilhas de auditoria completas, registro de regras acionadas e fontes consultadas. Os pareceristas recebem um documento estruturado que facilita a análise final, reduz o tempo necessário para leitura e melhora a consistência entre avaliações.

&emsp;Pesquisadores se beneficiam ao receber feedback antecipado sobre falhas comuns, principalmente em relação ao TCLE e à organização dos documentos. Isso reduz retrabalho e permite submissões mais completas. Secretarias conseguem organizar melhor o fluxo e reduzir etapas manuais, melhorando a eficiência operacional.

&emsp;Outro benefício importante é a padronização. Como a análise é estruturada a partir dos mesmos critérios e das mesmas normas, a variabilidade entre pareceres diminui. Esse ganho de consistência fortalece a confiança institucional e melhora a previsibilidade para pesquisadores e equipes técnicas.

&emsp;A precisão é acompanhada por segurança. A solução incorpora princípios de proteção de dados por design, incluindo minimização, criptografia, retenção configurável e segregação por instituição. A arquitetura modular permite integração com plataformas externas, como Plataforma Brasil, módulos jurídicos setoriais, detectores de plágio, bases de integridade e ferramentas de anonimização.

&emsp;Com essas capacidades, a Consentia se consolida como uma infraestrutura ética capaz de escalar avaliações com qualidade, transparência e responsabilidade, mantendo o ser humano no centro das decisões e utilizando a inteligência artificial como apoio analítico estruturado.
