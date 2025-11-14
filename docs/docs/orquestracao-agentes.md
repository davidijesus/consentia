---
id: orquestracao-agentes
title: Orqeustração de Agentes
sidebar_position: 4
---  

## Arquitetura Geral da Orquestração

&emsp;A Consentia utiliza um orquestrador central que coordena diferentes agentes especializados em análise ética. O orquestrador não executa análises isoladamente. Ele funciona como a camada de inteligência responsável por distribuir tarefas, agregá-las e reconciliar conflitos que surgem entre agentes. Sempre que um documento é enviado, o orquestrador inicia um fluxo coordenado, definindo a ordem de execução, determinando pesos de confiança para cada agente e registrando todas as etapas da execução para fins de auditoria.

&emsp;Essa arquitetura permite que a plataforma trate a avaliação ética como um processo multicomponente. Cada agente contribui com uma perspectiva complementar que seria difícil de reproduzir com um único modelo. A combinação de diferentes operações cria uma análise mais rica e explicável. O orquestrador garante que todo o fluxo seja modular, com logs detalhados, versionamento de modelos e trilhas rastreáveis, o que aumenta a confiabilidade da solução e facilita validação institucional.

&emsp;Outro ponto central é a capacidade da orquestração de lidar com conflitos. Quando agentes discordam, o orquestrador identifica a divergência, compara justificativas e decide qual recomendação possui maior base normativa ou maior consistência metodológica. Esses critérios são transparentes e podem ser adaptados de acordo com o contexto clínico, social ou digital de cada estudo.

## Agentes Especializados

&emsp;A orquestração utiliza cinco agentes principais, cada um com finalidade específica e complementar. O AgentDoc é responsável por extrair informações relevantes dos documentos submetidos. Ele identifica elementos metodológicos, objetivos, procedimentos, riscos declarados, público-alvo e aspectos essenciais do TCLE. Esse agente produz uma representação objetiva e organizada do estudo, que será utilizada pelos demais agentes.

&emsp;O AgentLaw atua como agente jurídico regulatório. Ele cruza as informações extraídas com normas como CNS 466, LGPD, GDPR e ICH-GCP. Sua função é detectar incompatibilidades ou lacunas e apontar dispositivos legais relevantes. Esse agente garante maior segurança normativa para pareceristas e reduz o risco institucional associado a interpretações incompletas das legislações vigentes.

&emsp;O AgentRisk é dedicado à avaliação de riscos. Ele identifica riscos físicos, psicológicos, sociais e digitais e considera a presença de populações vulneráveis, medidas de mitigação e coerência entre riscos e objetivos. Esse agente contribui com uma camada crítica de análise, especialmente em estudos que envolvem tecnologias digitais, biomarcadores ou intervenções sensíveis.

&emsp;O AgentConsent concentra-se exclusivamente na avaliação do TCLE. Ele verifica clareza do texto, legibilidade, acessibilidade e completude de informações essenciais. Também identifica inconsistências, ambiguidades e trechos que possam comprometer o entendimento da pessoa participante. Esse agente ajuda pesquisadores a reformular o documento antes da avaliação humana.

&emsp;O AgentWriter integra todas as análises anteriores. Ele organiza as evidências, compila recomendações e gera um parecer preliminar explicável. O texto resultante apresenta justificativas, riscos identificados, referências legais pertinentes e observações sobre clareza documental. Esse parecer funciona como um apoio objetivo para que pareceristas desenvolvam a avaliação final.

## Fluxo, Auditoria e Governança

&emsp;A orquestração segue um fluxo básico definido. O pesquisador realiza o upload dos documentos. O orquestrador distribui tarefas para os agentes, que atuam em paralelo ou em série conforme o tipo de análise. As respostas são reunidas pelo AgentWriter e transformadas em um parecer preliminar completo, acompanhado de logs explicáveis que registram decisões, regras acionadas, fontes consultadas e versões de modelos utilizados.

&emsp;Todo o processo está preparado para integração com agentes externos e módulos adicionais. Isso inclui detectores de plágio, sistemas de anonimização de dados, bases jurídicas específicas, verificadores de integridade de dados sintéticos e dicionários de populações vulneráveis. A arquitetura também permite interoperabilidade com plataformas institucionais, como a Plataforma Brasil, sem automatizar etapas que exigem julgamento humano.

&emsp;A governança é modular e configurável de acordo com o contexto da instituição. É possível ajustar pesos de agentes, ativar ou desativar módulos, versionar ontologias e habilitar auditorias contínuas de viés e deriva de modelos. Além disso, a solução segue princípios de proteção de dados desde o início. Isso inclui criptografia, minimização de informações, segregação de ambientes institucionais e retenção configurável.

&emsp;Essa camada de orquestração permite que análises éticas sejam executadas de forma consistente, completa e explicável, sem substituir o papel humano. O resultado final é uma infraestrutura que amplia a capacidade institucional e fortalece a confiança no processo de avaliação ética.
