export const project_types = [
    {
        'pt': "Página Estática",
        'en': "Static Page",
        'it': "Pagina Statica"
    },
    {
        'pt': "Aplicação Completa",
        'en': "Complete App",
        'it': "Applicazione Completa"
    },
    {
        'pt': "Automação",
        'en': "Automation",
        'it': "Automazione"
    },
    {
        'pt': "Suporte",
        'en': "Support",
        'it': "Supporto"
    },
]

const Texts = {
    navbarLinks: {
        'pt': ['Início', 'Experiências Profissionais','Projetos', 'Orçamento'],
        'en': ['Home', 'Work Experience', 'Projects', 'Budget'],
        'it': ['Inizio', 'Esperienze lavorative', 'Progetti', 'Budget']
    },
    titleHi: {
        'pt': "Oi! Eu sou o ",
        'en': "Hello, there! I'm",
        'it': "Ciao! Io sono"
    },
    devPhrase: {
        'pt': "Desenvolvedor Full Stack Pleno",
        'en': "Full Stack Developer Mid-level",
        'it': "Sviluppatore Full Stack di livello medio"
    },
    mainParagraph: {
        'pt': "Bem-vindo ao meu portfólio! Transformo ideias em soluções tecnológicas sob medida, desenvolvendo sistemas, otimizando sites e automatizando tarefas. Ofereço também consultoria estratégica para ajudar você ou sua empresa a escolher e implementar as melhores ferramentas, sejam elas personalizadas ou já disponíveis no mercado.",
        'en': "Welcome to my portfolio! I turn ideas into tailored technological solutions by developing systems, optimizing websites, and automating tasks. I also provide strategic consulting to help you or your business choose and implement the best tools, whether custom-built or already available on the market.",
        'it': "Benvenuto nel mio portfolio! Trasformo idee in soluzioni tecnologiche su misura, sviluppando sistemi, ottimizzando siti web e automatizzando attività. Offro inoltre consulenza strategica per aiutarti, o la tua azienda, a scegliere e implementare le migliori soluzioni, siano esse personalizzate o già disponibili sul mercato."
    },
    seeAll: {
        'pt': "Ver tudo",
        'en': "See all",
        'it': "Vedere tutto"
    },
    fullResume: {
        'pt': "Clique aqui para baixar meu currículo completo",
        'en': "Click here to download my full CV",
        'it': "Clicca qui per scaricare il mio CV completo"
    },
    resume_links: {
        'pt': require("../files/CV-GuilhermeMoret2025.pdf"),
        'en': require("../files/CV-GuilhermeMoret2025Eng.pdf"),
        'it': require("../files/CV-GuilhermeMoret2025It.pdf")
    },
    experiences: [
        {
            'company': "Banco do Brasil",
            'time': {
                'pt': "Setembro/2023 - Atualmente",
                'en': "September/2023 - Currently",
                'it': "Settembre/2023 - Attualmente"
            },
            'position': {
                'pt': "Desenvolvedor Back End",
                'en': "Back End Developer",
                "it": "Sviluppatore Back End"
            },
            'shortDescription': {
                'pt': "Desenvolvimento de microsserviços cloud para otimizar o consumo de mainframe, com foco em código limpo, queries SQL eficientes e melhorias técnicas em equipe.",
                'en': "Development of cloud microservices to optimize mainframe consumption, focusing on clean code, efficient SQL queries and team technical improvements.",
                'it': "Sviluppo di microservizi cloud per ottimizzare il consumo del mainframe, con un focus su codice pulito, query SQL efficienti e miglioramenti tecnici del team."
            },
            'longDescription': {
                'pt': "Atuo no desenvolvimento de microsserviços cloud com o objetivo de reduzir o consumo de mainframe, otimizando custos operacionais e melhorando a escalabilidade das operações do Banco do Brasil. Meu trabalho envolve a criação e manutenção de serviços eficientes, garantindo uma base de código limpa, queries SQL otimizadas e boas práticas de arquitetura de software para garantir alto desempenho e segurança. Além disso, participo ativamente de refinamentos técnicos em equipe, contribuindo para a melhoria contínua do fluxo de desenvolvimento e implantação dos sistemas. Todos os projetos em que atuo devem atender a regras negociais específicas, que são definidas pelo time responsável por regulamentação e compliance. Trabalho em estreita colaboração com esses profissionais para alinhar os requisitos e implementar soluções que não apenas cumpram as diretrizes técnicas, mas também estejam em total conformidade com as necessidades estratégicas da instituição. Atualmente, estou envolvido em um projeto de grande porte, que integra APIs externas, incluindo o Serasa, para realizar consultas automáticas e manter a base de dados do banco sempre atualizada para o time de análise de crédito. Para garantir segurança e confiabilidade nessa integração, o projeto foi dividido em diferentes microsserviços, cada um com uma função específica: um dedicado às consultas externas e outro responsável pela atualização segura dos dados internos. Esse modelo garante uma arquitetura modular, escalável e resiliente, facilitando manutenções futuras e garantindo que cada etapa do processo seja devidamente controlada. O desenvolvimento é feito utilizando Java com Quarkus e Hibernate, garantindo uma abordagem moderna e performática para microsserviços. A equipe segue metodologias ágeis, utilizando tanto Kanban quanto Scrum, o que permite uma organização eficiente das demandas e entregas constantes de valor para o banco. Além da implementação e manutenção dos serviços, também sou responsável por documentar as soluções desenvolvidas e garantir que a equipe tenha acesso a informações claras e organizadas para futuras evoluções dos projetos.",
                'en': "I work on the development of cloud microservices aimed at reducing mainframe consumption, optimizing operational costs, and improving the scalability of Banco do Brasil’s operations. My role involves creating and maintaining efficient services, ensuring a clean codebase, optimized SQL queries, and software architecture best practices to guarantee high performance and security. Additionally, I actively participate in technical refinements with the team, contributing to the continuous improvement of the development and deployment workflow. All projects I work on must comply with specific business rules, which are defined by the regulatory and compliance team. I closely collaborate with these professionals to align requirements and implement solutions that not only meet technical standards but also fully comply with the institution’s strategic needs. Currently, I am involved in a large-scale project that integrates external APIs, including Serasa, to perform automated queries and keep the bank’s database up to date for the credit analysis team. To ensure security and reliability in this integration, the project was structured into multiple microservices, each serving a specific function: one dedicated to external queries and another responsible for securely updating internal data. This architecture ensures a modular, scalable, and resilient system, facilitating future maintenance while maintaining full control over each stage of the process. Development is carried out using Java with Quarkus and Hibernate, ensuring a modern and high-performance approach to microservices. The team follows agile methodologies, utilizing both Kanban and Scrum, allowing for efficient task management and continuous delivery of value to the bank. In addition to implementation and maintenance, I am also responsible for documenting the developed solutions, ensuring the team has clear and well-structured information for future project enhancements.",
                'it': "Mi occupo dello sviluppo di microservizi cloud con l'obiettivo di ridurre il consumo di mainframe, ottimizzando i costi operativi e migliorando la scalabilità delle operazioni del Banco do Brasil. Il mio ruolo prevede la creazione e la manutenzione di servizi efficienti, garantendo una base di codice pulita, query SQL ottimizzate e best practice di architettura software per assicurare alte prestazioni e sicurezza. Inoltre, partecipo attivamente ai refinamenti tecnici con il team, contribuendo al miglioramento continuo del flusso di sviluppo e distribuzione dei sistemi. Tutti i progetti a cui lavoro devono rispettare specifiche regole aziendali, definite dal team responsabile della conformità normativa. Collaboro strettamente con questi professionisti per allineare i requisiti e implementare soluzioni che non solo soddisfino gli standard tecnici, ma siano anche pienamente conformi alle esigenze strategiche dell’istituto. Attualmente, sono coinvolto in un progetto su larga scala che integra API esterne, tra cui Serasa, per eseguire interrogazioni automatizzate e mantenere aggiornata la base dati della banca a supporto del team di analisi del credito. Per garantire sicurezza e affidabilità nell'integrazione, il progetto è stato strutturato in diversi microservizi, ognuno con una funzione specifica: uno dedicato alle interrogazioni esterne e un altro responsabile dell'aggiornamento sicuro dei dati interni. Questa architettura garantisce un sistema modulare, scalabile e resiliente, facilitando la manutenzione futura e permettendo un controllo rigoroso su ogni fase del processo. Lo sviluppo viene effettuato utilizzando Java con Quarkus e Hibernate, garantendo un approccio moderno e performante per i microservizi. Il team segue metodologie agili, utilizzando sia Kanban che Scrum, il che permette una gestione efficiente delle attività e una consegna continua di valore per la banca. Oltre all'implementazione e alla manutenzione, mi occupo anche della documentazione delle soluzioni sviluppate, assicurando che il team abbia accesso a informazioni chiare e ben strutturate per futuri miglioramenti dei progetti."
            }
        },
        {
            'company': "CSC Grupo Rovema",
            'time': {
                'pt': "Janeiro/2023 - Agosto/2023",
                'en': "January/2023 - August/2023",
                'it': "Gennaio/2023 - Agosto/2023"
            },
            'position': {
                'pt': "Analista de Processos e Automações",
                'en': "Process and Automation Analyst",
                "it": "Analista di Processi e Automazione"
            },
            'shortDescription': {
                'pt': "Automatização de processos empresariais com ferramentas como SoftExpert, Weni e UiPath. Resultados incluem desenvolvimento de regras e painéis em BPMN, criação de chatbots integrados a ERPs e um sistema de extração tributário com alta eficiência e precisão.",
                'en': "Business process automation using tools like SoftExpert, Weni, and UiPath. Achievements include developing rules and dashboards in BPMN, creating chatbots integrated with ERPs, and building a highly efficient and accurate tax data extraction system.",
                'it': "Automazione dei processi aziendali utilizzando strumenti come SoftExpert, Weni e UiPath. Risultati includono lo sviluppo di regole e dashboard in BPMN, la creazione di chatbot integrati con gli ERP e lo sviluppo di un sistema altamente efficiente e preciso per l'estrazione di dati fiscali."
            },
            'longDescription': {
                'pt': "Atuei na automação e otimização de processos empresariais, desenvolvendo e implementando soluções tecnológicas para diferentes departamentos da empresa. Além de estruturar processos para identificar oportunidades de melhoria, documentei detalhadamente cada automação para garantir a organização e continuidade dos projetos. Entre os principais projetos, destaco o trabalho com SoftExpert (BPMN), onde desenvolvi regras para formulários, implementei consultas SQL para relatórios gerenciais e colaborei na estruturação dos fluxos de trabalho da empresa dentro da plataforma. Também liderei a escolha e implementação da plataforma de chatbots Weni, analisando diferentes opções no mercado, realizando reuniões com stakeholders e construindo fluxos integrados aos ERPs da empresa, tanto para atendimento ao cliente quanto para campanhas da equipe de CRM. Outro projeto relevante foi a criação de um sistema de extração tributária (RPA) utilizando UiPath, automatizando a coleta e consolidação de dados de notas fiscais em XML. Essa solução permitiu extrair 48 colunas a cada 16 segundos sem interferência no uso da máquina, tornando viável um processo crítico de recuperação judicial de valores com 100% de precisão. Além disso, ofereci suporte contínuo às automações desenvolvidas para garantir seu funcionamento e evolução conforme novas demandas surgiam.",
                'en': "I worked on automating and optimizing business processes by developing and implementing technological solutions for various company departments. In addition to structuring processes to identify improvement opportunities, I thoroughly documented each automation to ensure organization and project continuity. Among the key projects, I worked with SoftExpert (BPMN), where I developed form rules, implemented SQL queries for management reports, and collaborated on structuring the company’s workflows within the platform. I also led the selection and implementation of the Weni chatbot platform, analyzing different market options, holding meetings with stakeholders, and building integrated workflows with the company’s ERPs, both for customer service and CRM team campaigns. Another significant project was the development of a tax extraction system (RPA) using UiPath, automating the collection and consolidation of XML invoice data. This solution enabled the extraction of 48 columns every 16 seconds without interfering with machine usage, making a critical judicial recovery process viable with 100% data accuracy. Additionally, I provided ongoing support for developed automations, ensuring their functionality and evolution as new demands arose.",
                'it': "Mi sono occupato dell’automazione e ottimizzazione dei processi aziendali, sviluppando e implementando soluzioni tecnologiche per diversi dipartimenti dell’azienda. Oltre a strutturare i processi per individuare opportunità di miglioramento, ho documentato ogni automazione in modo dettagliato per garantire organizzazione e continuità ai progetti. Tra i progetti più importanti, ho lavorato con SoftExpert (BPMN), sviluppando regole per i moduli, implementando query SQL per i report di gestione e collaborando alla strutturazione dei flussi di lavoro aziendali all’interno della piattaforma. Ho anche guidato la selezione e l’implementazione della piattaforma chatbot Weni, analizzando diverse opzioni di mercato, conducendo riunioni con gli stakeholder e costruendo flussi integrati con gli ERP aziendali, sia per il servizio clienti che per le campagne del team CRM. Un altro progetto significativo è stato lo sviluppo di un sistema di estrazione fiscale (RPA) utilizzando UiPath, che ha automatizzato la raccolta e la consolidazione dei dati delle fatture XML. Questa soluzione ha permesso di estrarre 48 colonne ogni 16 secondi senza interferire con l’uso della macchina, rendendo possibile un processo critico di recupero giudiziario con una precisione del 100%. Inoltre, ho fornito supporto continuo alle automazioni sviluppate, garantendone il funzionamento e l’evoluzione in base alle nuove esigenze."
            }
        },
        {
            'company': "CSC Grupo Rovema",
            'time': {
                'pt': "Junho/2022 - Janeiro/2023",
                'en': "June/2022 - January/2023",
                'it': "Giugno/2022 - Gennaio/2023"
            },
            'position': {
                'pt': "Desenvolvedor RPA",
                'en': "RPA Developer",
                "it": "Sviluppatore RPA"
            },
            'shortDescription': {
                'pt': "Automatização de processos com foco em soluções inovadoras. Principais resultados incluem automação de maquete solar com Arduino, sistema de busca de currículos com UiPath e suporte à implantação do SAP B1.",
                'en': "Process automation with a focus on innovative solutions. Key achievements include automating a solar model with Arduino, creating a résumé search system with UiPath, and supporting SAP B1 implementation.",
                'it': "Automazione dei processi con un focus su soluzioni innovative. Risultati principali includono l'automazione di un modello solare con Arduino, un sistema di ricerca di CV con UiPath e il supporto all'implementazione di SAP B1."
            },
            'longDescription': {
                'pt': "Responsável por avaliar solicitações de automação, garantindo a viabilidade dos projetos e conduzindo o planejamento, desenvolvimento e suporte das soluções implementadas. Busquei sempre documentar detalhadamente cada automação, garantindo rastreabilidade e facilitando futuras manutenções. Um dos projetos mais desafiadores foi a automação de uma maquete de usina solar utilizando Arduino, na qual sensores LDR e servomotores ajustavam automaticamente a posição das placas solares para maximizar a captação de luz. Esse projeto foi utilizado pelo setor comercial para demonstrar o funcionamento das usinas vendidas pela empresa, e fui responsável por toda a parte técnica, desde a escolha dos componentes até a programação e implementação do sistema. Além disso, desenvolvi um sistema de busca online de currículos (RPA) utilizando UiPath, automatizando a extração de perfis de candidatos a partir de plataformas online. A ferramenta permitia que o usuário inserisse parâmetros da vaga em um formulário, e o sistema coletava os dados das fontes selecionadas, consolidando-os em uma planilha para análise. Essa automação reduziu em mais de 90% o tempo gasto manualmente no processo e melhorou a eficiência da equipe de recrutamento e seleção. Outro ponto relevante foi meu suporte à implementação do SAP B1, onde auxiliei na migração de dados entre ERPs e no treinamento dos usuários, apesar de essa atividade não estar inicialmente dentro do meu escopo. Identifiquei a necessidade da equipe e atuei proativamente para garantir uma transição mais suave para o novo sistema.",
                'en': "I was responsible for evaluating automation requests, ensuring project feasibility, and leading the planning, development, and support of implemented solutions. I consistently documented each automation in detail, ensuring traceability and facilitating future maintenance. One of the most challenging projects was the automation of a solar plant model using Arduino, where LDR sensors and servo motors automatically adjusted the position of solar panels to maximize light capture. This project was used by the commercial sector to demonstrate how the company’s solar plants functioned, and I was responsible for all technical aspects, from component selection to programming and system implementation. Additionally, I developed an online resume search system (RPA) using UiPath, automating the extraction of candidate profiles from online platforms. The tool allowed users to input job parameters into a form, and the system collected data from selected sources, consolidating it into a spreadsheet for analysis. This automation reduced manual processing time by over 90% and significantly improved the efficiency of the recruitment and selection team. Another noteworthy contribution was my support in implementing SAP B1, assisting in ERP data migration and user training. Although this was not initially within my scope, I identified the team’s needs and proactively worked to ensure a smoother transition to the new system.",
                'it': "Mi sono occupato di valutare le richieste di automazione, garantendo la fattibilità dei progetti e conducendo la pianificazione, lo sviluppo e il supporto delle soluzioni implementate. Ho sempre documentato ogni automazione in modo dettagliato, assicurando la tracciabilità e facilitando le future manutenzioni. Uno dei progetti più complessi è stata l’automazione di un modello di impianto solare con Arduino, in cui sensori LDR e servomotori regolavano automaticamente la posizione dei pannelli solari per massimizzare la cattura della luce. Questo progetto è stato utilizzato dal reparto commerciale per dimostrare il funzionamento degli impianti venduti dall’azienda, e mi sono occupato di tutti gli aspetti tecnici, dalla scelta dei componenti alla programmazione e implementazione del sistema. Inoltre, ho sviluppato un sistema di ricerca online dei curriculum (RPA) utilizzando UiPath, automatizzando l’estrazione dei profili dei candidati da piattaforme online. Lo strumento permetteva agli utenti di inserire i parametri della posizione in un modulo, e il sistema raccoglieva i dati dalle fonti selezionate, consolidandoli in un foglio di calcolo per l’analisi. Questa automazione ha ridotto di oltre il 90% il tempo impiegato per il processo manuale e ha migliorato notevolmente l’efficienza del team di selezione del personale. Un altro contributo rilevante è stato il supporto all’implementazione di SAP B1, aiutando nella migrazione dei dati tra ERP e nella formazione degli utenti. Anche se questa attività non rientrava inizialmente nel mio ambito di competenza, ho individuato le esigenze del team e ho lavorato proattivamente per garantire una transizione più fluida al nuovo sistema."
            }
        },
        {
            'company': "CSC Grupo Rovema",
            'time': {
                'pt': "Agosto/2021 - Junho/2022",
                'en': "August/2021 - June/2022",
                'it': "Agosto/2021 - Giugno/2022"
            },
            'position': {
                'pt': "Assistente de Recursos Humanos",
                'en': "Human Resources Assistant",
                "it": "Assistente Risorse Umane"
            },
            'shortDescription': {
                'pt': "",
                'en': "",
                'it': ""
            },
            'longDescription': {
                'pt': "Atuando como Assistente de Recursos Humanos, fui responsável por apoiar os processos de recrutamento e seleção, realizando o agendamento e acompanhamento de entrevistas, aplicação de testes de Excel para níveis básico e intermediário, além da captação de documentos para contratação e integração de novos colaboradores. Também liderei a comunicação inicial com novos funcionários, enviando mensagens de boas-vindas no dia da admissão e garantindo que gestores recebessem os formulários de avaliação do período de experiência. Durante esse período, comecei a identificar oportunidades para automatizar tarefas repetitivas dentro do setor. Ao iniciar meus estudos em programação, fui incentivado por minha gerente a desenvolver soluções tecnológicas para otimizar processos internos. Isso marcou minha transição para a área de tecnologia, onde comecei a aplicar meus conhecimentos na prática. O principal projeto resultante dessa iniciativa foi um Sistema de Disparo de Mensagens Automatizado (RPA). Desenvolvi macros VBA na planilha de controle de admissões utilizada pelo RH, permitindo a identificação automática de novos funcionários com data de admissão no dia atual. A partir dessa verificação, implementei um robô em Selenium para enviar mensagens de boas-vindas via WhatsApp Web de forma automatizada. Essa solução eliminou a necessidade de envio manual, garantindo maior precisão e eficiência no processo, além de liberar tempo para atividades mais estratégicas dentro do setor. Essa experiência foi fundamental para minha transição definitiva para a área de TI, consolidando meu interesse e atuação no desenvolvimento de soluções automatizadas e na otimização de processos corporativos através da tecnologia.",
                'en': "As a Human Resources Assistant, I was responsible for supporting the recruitment and selection process, including scheduling and tracking interviews, administering Excel tests for basic and intermediate levels, and handling candidate documentation for hiring and onboarding. Additionally, I managed welcome messages for new employees on their first day and ensured that managers received probation period evaluation forms. During this period, I began identifying opportunities to automate repetitive tasks within the department. As I started learning programming, my manager encouraged me to develop technology-driven solutions to improve internal processes. This experience was a key milestone in my transition to the IT field, allowing me to apply my newly acquired knowledge in real-world scenarios. The most significant outcome of this initiative was the development of an Automated Messaging System (RPA). I created VBA macros within the HR team's admission tracking spreadsheet, enabling it to automatically identify new hires based on their start date. Once detected, a Selenium-based bot sent welcome messages via WhatsApp Web without manual intervention. This solution eliminated the need for manual messaging, ensuring greater efficiency and accuracy while freeing up time for more strategic HR activities. This experience played a crucial role in my definitive transition to IT, solidifying my expertise in process automation and corporate workflow optimization through technology.",
                'it': "Come Assistente Risorse Umane, ero responsabile del supporto ai processi di reclutamento e selezione, occupandomi della programmazione e gestione dei colloqui, della somministrazione di test di Excel per livelli base e intermedio e della gestione della documentazione dei candidati per l'assunzione e l'inserimento in azienda. Inoltre, mi occupavo dell'invio di messaggi di benvenuto ai nuovi dipendenti nel loro primo giorno e garantivo che i responsabili ricevessero i moduli di valutazione del periodo di prova. Durante questo periodo, ho iniziato a individuare opportunità per automatizzare attività ripetitive all'interno del dipartimento. Dopo aver iniziato a studiare programmazione, la mia responsabile mi ha incoraggiato a sviluppare soluzioni tecnologiche per ottimizzare i processi interni. Questa esperienza ha rappresentato un punto di svolta nella mia transizione verso l’ambito IT, permettendomi di applicare le mie nuove competenze in un contesto pratico. Il progetto più significativo derivante da questa iniziativa è stato lo sviluppo di un Sistema di Invio Automatico di Messaggi (RPA). Ho creato macro VBA nel foglio di calcolo utilizzato dal team HR per monitorare le assunzioni, consentendo di identificare automaticamente i nuovi dipendenti in base alla data di inizio. Una volta rilevato un nuovo ingresso, un bot basato su Selenium inviava messaggi di benvenuto tramite WhatsApp Web senza necessità di intervento manuale. Questa soluzione ha eliminato l'invio manuale dei messaggi, garantendo maggiore efficienza e precisione e liberando tempo per attività HR più strategiche. Questa esperienza è stata fondamentale per la mia transizione definitiva al settore IT, consolidando la mia esperienza nell’automazione dei processi e nell’ottimizzazione dei flussi di lavoro aziendali attraverso la tecnologia."
            }
        }
    ],
    projects: [
        {       // Automação Python
            'title': {
                'pt': "Sistema de Disparo de Mensagens",
                'en': "Bulk Messaging System",
                'it': "Sistema di Invio Massivo di Messaggi"
            },
            'type': {
                'pt': project_types[2]['pt'],
                'en': project_types[2]['en'],
                'it': project_types[2]['it']
            },
            'shortDescription': {
                'pt': "O sistema robótico de disparo de mensagens é uma aplicação versátil projetada para otimizar e automatizar os processos de envio de mensagens no WhatsApp. Ele oferece uma maneira prática de gerenciar e enviar mensagens em massa para um público-alvo.",
                'en': "The robotic bulk messaging system is a versitile application designed to streamline and automate WhatsApp messaging processes. It provides a convenient way to manage and send bulk messages to a target audience.",
                'it': "Il sistema robotico di invio massivo di messaggi è un'applicazione versatile progettata per ottimizzare e automatizzare i processi di messaggistica su WhatsApp. Offre un modo pratico per gestire e inviare messaggi in massa a un pubblico target."
            },
            'longDescription': {
                'pt': "O Sistema Robótico de Disparo de Mensagens foi desenvolvido para otimizar e automatizar a comunicação via WhatsApp, facilitando o envio de lembretes e interações personalizadas com clientes. Originalmente criado para uma clínica de nutrição, o sistema integra Google Planilhas, Selenium e WhatsApp Web API, permitindo gerenciar os envios de forma eficiente. A aplicação lê os dados diretamente de uma planilha no Google Sheets por meio da Google API, identificando quais clientes devem receber mensagens com base em regras pré-definidas pela nutricionista responsável. As mensagens podem ser enviadas em tempo real ou agendadas, conforme necessário, e há um editor interno para personalizar textos e anexos, como lembretes de consulta, pedidos de feedback e mensagens para leads. A interface gráfica, desenvolvida em Python com Tkinter, oferece um painel intuitivo onde o usuário pode acessar a planilha, configurar modelos de mensagem, definir horários de envio e disparar comunicações instantaneamente. O envio é realizado por meio do Selenium, que interage com o WhatsApp Web, simulando ações humanas para evitar bloqueios. Além disso, o sistema possui um mecanismo de verificação que confirma se a mensagem foi enviada corretamente e, caso contrário, exibe notificações de falha. Embora tenha sido projetado para o setor de saúde, o sistema é altamente adaptável e pode ser utilizado por qualquer empresa que necessite de comunicação automatizada com clientes, seja para lembretes, campanhas de marketing ou suporte.",
                'en': "The Robotic Message Sending System was developed to optimize and automate communication via WhatsApp, streamlining the process of sending reminders and personalized interactions with clients. Originally created for a nutrition clinic, the system integrates Google Sheets, Selenium, and WhatsApp Web API, enabling efficient management of message delivery. The application reads data directly from a Google Sheets spreadsheet through the Google API, identifying which clients should receive messages based on predefined rules set by the responsible nutritionist. Messages can be sent in real time or scheduled as needed, and there is an internal editor to customize texts and attachments, such as appointment reminders, feedback requests, and messages for leads. The graphical interface, developed in Python with Tkinter, offers an intuitive panel where the user can access the spreadsheet, configure message templates, set delivery times, and send communications instantly. Delivery is performed via Selenium, which interacts with WhatsApp Web, simulating human actions to avoid blocking. Additionally, the system includes a verification mechanism that confirms whether the message was sent correctly and, if not, displays failure notifications. Although designed for the healthcare sector, the system is highly adaptable and can be used by any business that needs automated communication with clients, whether for reminders, marketing campaigns, or support.",
                'it': "Il Sistema Robotico di Invio dei Messaggi è stato sviluppato per ottimizzare e automatizzare la comunicazione tramite WhatsApp, facilitando l'invio di promemoria e interazioni personalizzate con i clienti. Originariamente creato per una clinica di nutrizione, il sistema integra Google Sheets, Selenium e l'API di WhatsApp Web, consentendo di gestire l'invio dei messaggi in modo efficiente. L'applicazione legge i dati direttamente da un foglio di lavoro in Google Sheets tramite l'API di Google, identificando quali clienti devono ricevere i messaggi in base a regole predefinite dalla nutrizionista responsabile. I messaggi possono essere inviati in tempo reale o programmati, a seconda delle necessità, e c'è un editor interno per personalizzare testi e allegati, come promemoria per appuntamenti, richieste di feedback e messaggi per potenziali clienti. L'interfaccia grafica, sviluppata in Python con Tkinter, offre un pannello intuitivo dove l'utente può accedere al foglio di lavoro, configurare i modelli di messaggio, definire gli orari di invio e inviare le comunicazioni istantaneamente. L'invio viene eseguito tramite Selenium, che interagisce con WhatsApp Web, simulando azioni umane per evitare blocchi. Inoltre, il sistema dispone di un meccanismo di verifica che conferma se il messaggio è stato inviato correttamente e, in caso contrario, mostra notifiche di errore. Sebbene sia stato progettato per il settore sanitario, il sistema è altamente adattabile e può essere utilizzato da qualsiasi azienda che necessiti di comunicazione automatizzata con i clienti, sia per promemoria, campagne di marketing o supporto."
            },
            'details': {
                'pt': "Python, Selenium, Google Planilhas",
                'en': "Python, Selenium, Google Sheets",
                'it': "Python, Selenium, Fogli Google"
            },
            'link': "https://github.com/Takater/RoboticMessenger"
        },
        {       // Painel de dados
            'title': {
                'pt': "Painel de Dados ISP-RJ",
                'en': "ISP-RJ Data Panel",
                'it': "Pannello Dati ISP-RJ"
            },
            'type': {
                'pt': project_types[1]['pt'],
                'en': project_types[1]['en'],
                'it': project_types[1]['it']
            },
            'shortDescription': {
                'pt': "Aplicação web para a geração de gráficos descritivos a partir de arquivos CSV disponibilizados pelo Instituto de Segurança Pública do Rio de Janeiro, facilitando a análise e visualização de dados.",
                'en': "Web application for generating descriptive charts from CSV files provided by the Public Security Institute of Rio de Janeiro, enabling easier data analysis and visualization.",
                'it': "Applicazione web per la generazione di grafici descrittivi a partire dai file CSV forniti dall'Istituto di Sicurezza Pubblica di Rio de Janeiro, facilitando l'analisi e la visualizzazione dei dati."
            },
            'longDescription': {
                'pt': "A aplicação web de visualização de dados foi desenvolvida para facilitar a análise do nível de criminalidade no estado do Rio de Janeiro. Com uma interface intuitiva e de uso livre, ela permite que qualquer usuário acesse e interprete informações estatísticas extraídas diretamente da API do Instituto de Segurança Pública do Rio de Janeiro, sem a necessidade de manipular arquivos CSV manualmente. A plataforma oferece gráficos descritivos nos formatos de barras e linhas, permitindo a comparação de dados criminais ao longo do tempo. O usuário pode aplicar filtros para visualizar informações específicas por município ou para o estado como um todo, selecionar períodos de interesse e escolher o formato gráfico mais adequado para sua análise. Os gráficos são gerados dinamicamente utilizando Matplotlib e NumPy, garantindo uma representação visual clara dos dados. Além disso, é possível salvar as imagens diretamente da tela para uso em relatórios ou estudos. A aplicação foi construída com Python (Django) no backend e React com TypeScript no frontend, proporcionando uma experiência fluida e responsiva. Um dos principais desafios do desenvolvimento foi a integração eficiente entre a API pública do Instituto de Segurança Pública e a geração dinâmica dos gráficos, garantindo que os dados fossem apresentados de maneira precisa e acessível. Embora tenha sido criada inicialmente para um desafio técnico, a ferramenta está disponível para qualquer usuário interessado em analisar a evolução dos índices criminais no estado, podendo ser útil para jornalistas, pesquisadores e até mesmo para órgãos de segurança pública.",
                'en': "The data visualization web application was developed to facilitate the analysis of crime levels in the state of Rio de Janeiro. With an intuitive and free-to-use interface, it allows any user to access and interpret statistical information directly extracted from the Rio de Janeiro Public Security Institute's API, without the need to manually handle CSV files. The platform offers descriptive bar and line charts, enabling the comparison of criminal data over time. Users can apply filters to view specific information by municipality or for the entire state, select periods of interest, and choose the most suitable chart format for their analysis. The charts are dynamically generated using Matplotlib and NumPy, ensuring a clear visual representation of the data. Additionally, it is possible to save images directly from the screen for use in reports or studies. The application was built with Python (Django) on the backend and React with TypeScript on the frontend, providing a smooth and responsive experience. One of the main development challenges was the efficient integration between the Public Security Institute's public API and the dynamic generation of charts, ensuring that data was presented accurately and accessibly. Although initially created for a technical challenge, the tool is available to any user interested in analyzing the evolution of crime rates in the state, and it can be useful for journalists, researchers, and even public security agencies.",
                'it': "L'applicazione web di visualizzazione dei dati è stata sviluppata per facilitare l'analisi dei livelli di criminalità nello stato di Rio de Janeiro. Con un'interfaccia intuitiva e di uso gratuito, consente a qualsiasi utente di accedere e interpretare le informazioni statistiche estratte direttamente dall'API dell'Istituto di Sicurezza Pubblica di Rio de Janeiro, senza la necessità di manipolare manualmente i file CSV. La piattaforma offre grafici descrittivi nei formati a barre e a linee, permettendo di confrontare i dati criminali nel tempo. L'utente può applicare filtri per visualizzare informazioni specifiche per comune o per l'intero stato, selezionare i periodi di interesse e scegliere il formato grafico più adatto alla propria analisi. I grafici vengono generati dinamicamente utilizzando Matplotlib e NumPy, garantendo una chiara rappresentazione visiva dei dati. Inoltre, è possibile salvare le immagini direttamente dallo schermo per utilizzarle in rapporti o studi. L'applicazione è stata sviluppata con Python (Django) per il backend e React con TypeScript per il frontend, offrendo un'esperienza fluida e reattiva. Una delle principali sfide dello sviluppo è stata l'integrazione efficiente tra l'API pubblica dell'Istituto di Sicurezza Pubblica e la generazione dinamica dei grafici, assicurando che i dati venissero presentati in modo preciso e accessibile. Anche se inizialmente creata per una sfida tecnica, lo strumento è disponibile per qualsiasi utente interessato ad analizzare l'evoluzione degli indici di criminalità nello stato, potendo essere utile per giornalisti, ricercatori e persino per enti di sicurezza pubblica."
            },
            'details': {
                'pt': "Python, Django, Typescript, React, ciência de dados, integração API externa",
                'en': "Python, Django, Typescript, React, data science, external API integration",
                'it': "Python, Django, Typescript, React, scienza dei dati, integrazione API esterna"
            },
            'link': "https://github.com/Takater/painel-isp"
        },
        {       // Landing page
            'title': {
                'pt': "Página de Destino",
                'en': "Landing Page",
                'it': "Pagina di destinazione"
            },
            'type': {
                'pt': project_types[0]['pt'],
                'en': project_types[0]['en'],
                'it': project_types[0]['it']
            },
            'shortDescription': {
                'pt': "Página de Destino (Landing page) versátil, originalmente desenvolvida para campanhas políticas nas eleições de 2022, mas adaptável para qualquer tipo de negócio. A solução permite capturar leads, encaminhar contatos diretamente para o WhatsApp e gerenciar inscrições em newsletters, facilitando o engajamento e a comunicação com o público.",
                'en': "Versatile landing page originally designed for political campaigns in the 2022 elections but adaptable to any type of business. This solution enables lead capture, direct WhatsApp contact forwarding, and newsletter sign-ups, making audience engagement and communication more efficient.",
                'it': "Pagina di Destinazione (Landing page) versatile, inizialmente sviluppata per campagne politiche nelle elezioni del 2022, ma adattabile a qualsiasi tipo di attività. La soluzione consente di acquisire lead, reindirizzare i contatti direttamente su WhatsApp e gestire le iscrizioni alle newsletter, facilitando il coinvolgimento e la comunicazione con il pubblico."
            },
            'longDescription': {
                'pt': "A Landing Page Versátil foi originalmente desenvolvida para campanhas políticas durante as eleições de 2022, com o objetivo de atrair eleitores, apresentar a trajetória e propostas da candidata e facilitar a comunicação com o público. Para isso, a página incluía uma seção dedicada à biografia e conquistas da candidata, bem como um espaço detalhado sobre os projetos planejados caso fosse eleita. Além disso, integrava-se diretamente à API do WhatsApp Web, permitindo que os visitantes ingressassem em grupos exclusivos da campanha ou iniciassem uma conversa direta com uma mensagem pré-definida. O código foi estruturado para garantir alta personalização e reutilização para outros negócios. Todos os textos, imagens e informações de contato foram organizados em arquivos separados, tornando a edição fácil e sem necessidade de alterar a estrutura principal da página. Dessa forma, qualquer empresa ou profissional pode adaptar a landing page ao seu próprio uso, mantendo a base do código e apenas ajustando o conteúdo conforme necessário. A navegação foi desenvolvida com foco em UX/UI, garantindo um layout responsivo que se adapta a diferentes tamanhos de tela. Elementos como botões de chamada para ação (CTAs) foram posicionados estrategicamente para maximizar a conversão. Além disso, a estrutura do projeto permite futuras integrações, como sistemas de analytics para monitoramento de desempenho ou armazenamento de dados dos leads.Atualmente, a página não possui uma integração nativa para métricas ou armazenamento de contatos, mas sua arquitetura permite que um backend seja facilmente implementado para essas funcionalidades. Também há suporte para múltiplos idiomas, bastando definir as traduções no arquivo JSON correspondente, o que amplia ainda mais a sua aplicabilidade. A principal complexidade do desenvolvimento esteve na criação da primeira versão do sistema, que exigiu um tempo maior para definir uma estrutura modular e flexível. No entanto, essa base tornou os projetos subsequentes muito mais ágeis, facilitando a personalização para qualquer outro segmento que precise de uma landing page para captura de leads, contato via WhatsApp e gestão de newsletter.",
                'en': "The Versatile Landing Page was originally developed for political campaigns during the 2022 elections, aiming to attract voters, present the candidate's background and proposals, and facilitate communication with the public. The page included a dedicated section for the candidate’s biography and achievements, as well as a detailed space about the planned projects if elected. Additionally, it integrated directly with the WhatsApp Web API, allowing visitors to join exclusive campaign groups or initiate a direct conversation with a pre-defined message. The code was structured to ensure high customization and reusability for other businesses. All texts, images, and contact information were organized in separate files, making editing simple without needing to alter the main page structure. This approach allows any company or professional to adapt the landing page for their own use, keeping the core codebase intact while only adjusting the content as needed. The navigation was developed with a focus on UX/UI, ensuring a responsive layout that adapts to different screen sizes. Elements such as call-to-action (CTA) buttons were strategically positioned to maximize conversion. Moreover, the project structure allows for future integrations, such as analytics systems for performance monitoring or lead data storage. Currently, the page does not have native integration for metrics or contact storage, but its architecture allows for an easy backend implementation to support these features. There is also support for multiple languages by simply defining translations in the corresponding JSON file, which further enhances its applicability. The main complexity of the development was in creating the first version of the system, which required more time to establish a modular and flexible structure. However, this foundation made subsequent projects much more agile, simplifying customization for any other segment needing a landing page for lead capture, WhatsApp contact, and newsletter management.",
                'it': "La Landing Page Versatile è stata originariamente sviluppata per le campagne politiche durante le elezioni del 2022, con l'obiettivo di attrarre elettori, presentare il percorso e le proposte della candidata e facilitare la comunicazione con il pubblico. La pagina includeva una sezione dedicata alla biografia e alle conquiste della candidata, oltre a uno spazio dettagliato sui progetti pianificati in caso di elezione. Inoltre, si integrava direttamente con l'API di WhatsApp Web, permettendo ai visitatori di entrare in gruppi esclusivi della campagna o di avviare una conversazione diretta con un messaggio predefinito. Il codice è stato strutturato per garantire un'elevata personalizzazione e riutilizzo per altre attività. Tutti i testi, le immagini e le informazioni di contatto sono stati organizzati in file separati, rendendo la modifica semplice senza la necessità di alterare la struttura principale della pagina. Questo approccio consente a qualsiasi azienda o professionista di adattare la landing page al proprio utilizzo, mantenendo intatta la base del codice e modificando solo il contenuto secondo necessità. La navigazione è stata sviluppata con un focus su UX/UI, garantendo un layout reattivo che si adatta a diverse dimensioni dello schermo. Elementi come i pulsanti di call-to-action (CTA) sono stati posizionati strategicamente per massimizzare la conversione. Inoltre, la struttura del progetto consente future integrazioni, come sistemi di analisi per il monitoraggio delle prestazioni o l'archiviazione dei dati dei lead. Attualmente, la pagina non ha un'integrazione nativa per le metriche o l'archiviazione dei contatti, ma la sua architettura consente di implementare facilmente un backend per supportare queste funzionalità. È presente anche il supporto per più lingue, definendo semplicemente le traduzioni nel file JSON corrispondente, ampliando ulteriormente la sua applicabilità. La principale complessità dello sviluppo è stata nella creazione della prima versione del sistema, che ha richiesto più tempo per definire una struttura modulare e flessibile. Tuttavia, questa base ha reso i progetti successivi molto più agili, semplificando la personalizzazione per qualsiasi altro segmento che necessiti di una landing page per la cattura dei lead, il contatto tramite WhatsApp e la gestione delle newsletter."
            },
            'details': {
                'pt': "Javascript (React), HTML, CSS, API WhatsApp, altamente adaptável",
                'en': "Javascript (React), HTML, CSS, WhatsApp API, highly adaptable",
                'it': "Javascript (React), HTML, CSS, WhatsApp API, altamente adattabile"
            },
            'link': "https://github.com/Takater/dep-mirian-moret"
        },
        {       // Portfolio
            'title': {
                'pt': "Este Portfólio",
                'en': "This Portfolio",
                'it': "Questo Portfolio"
            },
            'type': {
                'pt': project_types[0]['pt'],
                'en': project_types[0]['en'],
                'it': project_types[0]['it']
            },
            'longDescription': {
                'pt': "Meu portfólio é uma aplicação web desenvolvida com React, estruturada de forma organizada e reutilizável, seguindo boas práticas adquiridas ao longo da experiência com desenvolvimento frontend. Ele adota o modelo de single-page application (SPA), onde as seções são renderizadas dinamicamente, garantindo uma navegação fluida sem a necessidade de recarregamento da página. A interface conta com um menu lateral para desktops e uma versão adaptada para dispositivos móveis, onde o menu se desloca para a parte superior. O design combina Bootstrap com CSS personalizado, proporcionando uma experiência moderna, minimalista e intuitiva. O portfólio é multilíngue, permitindo alternância entre português, inglês e italiano através de um botão de bandeiras, com os textos armazenados em arquivos JSON para facilitar a manutenção e personalização sem impactar o layout. As seções incluem experiências profissionais e projetos, apresentados de maneira detalhada, com botões para acessar o código-fonte e, quando disponível, versões demonstrativas online. Além disso, há um gerador de preços para projetos, um formulário interativo que permite aos visitantes estimar um valor aproximado com base em categorias pré-definidas e um sistema dinâmico de cálculo. O resultado apresenta um intervalo seguro de valores, auxiliando na tomada de decisão. Os dados preenchidos no formulário são automaticamente organizados e encaminhados para o WhatsApp, gerando uma mensagem estruturada que pode ser editada pelo usuário antes do envio. Atualmente, o portfólio está hospedado no Netlify, garantindo carregamento rápido e acesso confiável. O código foi desenvolvido para ser bem estruturado e reutilizável, facilitando futuras expansões. A navegação intuitiva e a adaptação para diferentes tamanhos de tela garantem uma experiência fluida para o usuário. Embora atualmente a adição de novos conteúdos exija ajustes manuais no código, a estrutura do projeto permite a implementação futura de um backend para facilitar essa gestão.",
                'en': "My portfolio is a web application developed with React, organized and reusable, following best practices acquired through my experience in frontend development. It adopts the single-page application (SPA) model, where sections are dynamically rendered, ensuring smooth navigation without the need to reload the page. The interface features a sidebar menu for desktops and an adapted version for mobile devices, where the menu moves to the top. The design combines Bootstrap with custom CSS, providing a modern, minimalist, and intuitive experience. The portfolio is multilingual, allowing users to switch between Portuguese, English, and Italian through a flag button, with texts stored in JSON files to facilitate maintenance and customization without impacting the layout. The sections include professional experiences and projects, presented in detail, with buttons to access the source code and, when available, online demo versions. Additionally, there is a project pricing generator, an interactive form that allows visitors to estimate an approximate value based on predefined categories and a dynamic calculation system. The result presents a safe price range, assisting in decision-making. The data filled in the form is automatically organized and sent to WhatsApp, generating a structured message that can be edited by the user before sending. Currently, the portfolio is hosted on Netlify, ensuring fast loading and reliable access. The code was developed to be well-structured and reusable, facilitating future expansions. The intuitive navigation and adaptation to different screen sizes ensure a smooth user experience. Although adding new content currently requires manual adjustments to the code, the project structure allows for the future implementation of a backend to simplify this management.",
                'it': "Il mio portfolio è un'applicazione web sviluppata con React, strutturata in modo organizzato e riutilizzabile, seguendo le migliori pratiche acquisite durante l'esperienza nello sviluppo frontend. Adotta il modello di single-page application (SPA), in cui le sezioni vengono renderizzate dinamicamente, garantendo una navigazione fluida senza la necessità di ricaricare la pagina. L'interfaccia presenta un menu laterale per desktop e una versione adattata per dispositivi mobili, dove il menu si sposta nella parte superiore. Il design combina Bootstrap con CSS personalizzato, offrendo un'esperienza moderna, minimalista e intuitiva. Il portfolio è multilingue, permettendo di passare tra portoghese, inglese e italiano tramite un pulsante con le bandiere, con i testi memorizzati in file JSON per facilitare la manutenzione e la personalizzazione senza influire sul layout. Le sezioni includono esperienze professionali e progetti, presentati in modo dettagliato, con pulsanti per accedere al codice sorgente e, quando disponibile, a versioni dimostrative online. Inoltre, è presente un generatore di prezzi per i progetti, un modulo interattivo che consente ai visitatori di stimare un valore approssimativo in base a categorie predefinite e un sistema di calcolo dinamico. Il risultato presenta un intervallo di valori sicuro, aiutando nel processo decisionale. I dati inseriti nel modulo vengono automaticamente organizzati e inviati a WhatsApp, generando un messaggio strutturato che può essere modificato dall'utente prima dell'invio. Attualmente, il portfolio è ospitato su Netlify, garantendo un caricamento rapido e un accesso affidabile. Il codice è stato sviluppato per essere ben strutturato e riutilizzabile, facilitando le future espansioni. La navigazione intuitiva e l'adattamento a diverse dimensioni dello schermo garantiscono un'esperienza utente fluida. Sebbene al momento l'aggiunta di nuovi contenuti richieda modifiche manuali al codice, la struttura del progetto permette una futura implementazione di un backend per semplificare questa gestione."
            },
            'details': {
                'pt': "Javascript (React), HTML, CSS",
                'en': "Javascript (React), HTML, CSS",
                'it': "Javascript (React), HTML, CSS"
            },
            'link': "https://github.com/Takater/Portfolio"
        },
        {       // My Stocks
            'title': {
                'pt': "Aplicativo My Stocks",
                'en': "My Stocks App",
                'it': "Applicazione My Stocks"
            },
            'type': {
                'pt': project_types[1]['pt'],
                'en': project_types[1]['en'],
                'it': project_types[1]['it']
            },
            'longDescription': {
                'pt': "O projeto \"My Stocks\" é uma aplicação web Full Stack desenvolvida com Flask, que permite ao usuário gerenciar portfólios de ações de forma prática e intuitiva. Originalmente criado como parte de um desafio de um curso de programação da plataforma edX, o sistema foi posteriormente aprimorado para fins de aprendizado e inclusão no portfólio, reforçando seu caráter didático e funcional. A aplicação oferece funcionalidades como registro e login de usuários, além de uma conta de testes gratuita que reinicia os dados a cada login e logout, proporcionando uma experiência segura e flexível para novos usuários explorarem a ferramenta. A segurança é reforçada com a criptografia de senhas, garantindo a proteção das informações sensíveis. Através da integração com a API da IEX, o sistema possibilita a consulta em tempo real dos preços das ações, sem limitações explícitas de consultas devido à natureza gratuita da API. O usuário pode \"comprar\" e \"vender\" ações (sem envolver dinheiro real), e todas as transações são registradas em um histórico detalhado, onde se mantém informações como quantidade de cotas, valores de compra e venda, e identificação das transações. Para verificar o valor atual da carteira, a aplicação realiza consultas dinâmicas diretamente na API da IEX, garantindo informações atualizadas sobre as cotações das ações. O banco de dados utilizado é o SQLite, onde os dados das carteiras são armazenados de forma estruturada. A tabela de cotas possuídas vincula o ID do usuário ao ID da cota adquirida e à quantidade, enquanto o histórico de transações registra as operações de compra e venda, permitindo uma gestão eficiente e transparente do portfólio. Para a validação das transações, o sistema verifica se o usuário possui fundos suficientes antes de permitir a compra, evitando inconsistências nos saldos virtuais. A interface da aplicação foi projetada para atender tanto investidores iniciantes quanto mais experientes. Há mensagens de orientação para os novos usuários, incluindo alertas sobre possíveis variações nos valores das ações durante o processo de compra e acesso direto à tabela de siglas das ações disponíveis na IEX. Embora o projeto atualmente não inclua funcionalidades avançadas como projeção de crescimento das ações ou gráficos dinâmicos para análise do portfólio, há planos futuros para adicionar gráficos que demonstrem a evolução dos valores das ações adquiridas pelo usuário, trazendo maior profundidade à análise de investimentos. Apesar de ser um protótipo conceitual, a aplicação apresenta uma base sólida e práticas de desenvolvimento que permitem uma eventual escalabilidade para um ambiente de produção mais robusto.",
                'en': "The \"My Stocks\" project is a Full Stack web application developed with Flask, allowing users to manage stock portfolios in a practical and intuitive way. Originally created as part of a programming challenge on the edX platform, the system was later enhanced for learning purposes and to be included in the portfolio, reinforcing its educational and functional character. The application offers features such as user registration and login, as well as a free test account that resets data with each login and logout, providing a secure and flexible experience for new users exploring the tool. Security is strengthened with password encryption, ensuring the protection of sensitive information. Through integration with the IEX API, the system enables real-time stock price queries, with no explicit query limitations due to the API’s free nature. Users can \"buy\" and \"sell\" stocks (without involving real money), and all transactions are recorded in a detailed history, maintaining information such as the number of shares, purchase and sale prices, and transaction identification. To verify the current portfolio value, the application performs dynamic queries directly to the IEX API, ensuring updated stock price information. The database used is SQLite, where portfolio data is stored in a structured manner. The shares table links the user ID to the acquired share ID and quantity, while the transaction history records purchase and sale operations, enabling efficient and transparent portfolio management. For transaction validation, the system checks if the user has sufficient funds before allowing the purchase, preventing inconsistencies in virtual balances. The application interface was designed to accommodate both beginner and more experienced investors. It includes guidance messages for new users, alerts about potential stock price changes during the purchase process, and direct access to the list of available stock symbols on IEX. Although the project currently does not include advanced features such as stock growth projections or dynamic charts for portfolio analysis, there are future plans to add graphs demonstrating the evolution of stock values acquired by the user, bringing more depth to investment analysis. Despite being a conceptual prototype, the application presents a solid foundation and development practices that allow for eventual scalability to a more robust production environment.",
                'it': "Il progetto \"My Stocks\" è un'applicazione web Full Stack sviluppata con Flask, che consente all'utente di gestire portafogli di azioni in modo pratico e intuitivo. Originariamente creato come parte di una sfida di programmazione sulla piattaforma edX, il sistema è stato successivamente migliorato per scopi di apprendimento e per essere incluso nel portfolio, rafforzando il suo carattere didattico e funzionale. L'applicazione offre funzionalità come registrazione e accesso degli utenti, oltre a un account di prova gratuito che ripristina i dati a ogni accesso e disconnessione, offrendo un'esperienza sicura e flessibile ai nuovi utenti che esplorano lo strumento. La sicurezza è garantita con la crittografia delle password, assicurando la protezione delle informazioni sensibili. Attraverso l'integrazione con l'API IEX, il sistema permette la consultazione in tempo reale dei prezzi delle azioni, senza limiti espliciti di richieste grazie alla natura gratuita dell'API. L'utente può \"comprare\" e \"vendere\" azioni (senza coinvolgere denaro reale) e tutte le transazioni vengono registrate in una cronologia dettagliata, mantenendo informazioni come quantità di azioni, valori di acquisto e vendita e identificazione delle transazioni. Per verificare il valore attuale del portafoglio, l'applicazione esegue query dinamiche direttamente all'API IEX, garantendo informazioni aggiornate sui prezzi delle azioni. Il database utilizzato è SQLite, dove i dati dei portafogli sono archiviati in modo strutturato. La tabella delle azioni possedute collega l'ID utente all'ID dell'azione acquisita e alla quantità, mentre la cronologia delle transazioni registra le operazioni di acquisto e vendita, permettendo una gestione efficiente e trasparente del portafoglio. Per la validazione delle transazioni, il sistema verifica se l'utente dispone di fondi sufficienti prima di consentire l'acquisto, evitando incongruenze nei saldi virtuali. L'interfaccia dell'applicazione è progettata per soddisfare sia gli investitori principianti che quelli più esperti. Sono presenti messaggi di orientamento per i nuovi utenti, inclusi avvisi sulle possibili variazioni dei valori delle azioni durante il processo di acquisto e l'accesso diretto alla tabella dei simboli delle azioni disponibili su IEX. Sebbene il progetto attualmente non includa funzionalità avanzate come proiezioni di crescita delle azioni o grafici dinamici per l'analisi del portafoglio, ci sono piani futuri per aggiungere grafici che mostrino l'evoluzione dei valori delle azioni acquistate dall'utente, offrendo maggiore profondità all'analisi degli investimenti. Nonostante sia un prototipo concettuale, l'applicazione presenta una base solida e pratiche di sviluppo che consentono una futura scalabilità verso un ambiente di produzione più robusto."
            },
            'details': {
                'pt': "Python (Flask), HTML, CSS, Jinja, integração API externa, SQLite",
                'en': "Python (Flask), HTML, CSS, Jinja, external API integration, SQLite",
                'it': "Python (Flask), HTML, CSS, Jinja, integrazione API esterna, SQLite"
            },
            'link': "https://github.com/Takater/MyStocks"
        },
        {       // Automação VBA
            'title': {
                'pt': "Disparo automatizado de mensagens no WhatsApp com VBA",
                'en': "Automated sending of messages on WhatsApp with VBA",
                'it': "Invio automatico di messaggi su WhatsApp con VBA"
            },
            'type': {
                'pt': project_types[2]['pt'],
                'en': project_types[2]['en'],
                'it': project_types[2]['it']
            },
            'longDescription': {
                'pt': "O projeto foi desenvolvido para automatizar o envio de mensagens personalizadas de boas-vindas para novos colaboradores de uma empresa, utilizando a interface do WhatsApp Web. O principal objetivo da automação foi otimizar o processo de envio manual, reduzindo o tempo necessário em cerca de 93% e garantindo 100% de assertividade na personalização e no envio das mensagens. Antes da automação, o processo manual estava sujeito a erros humanos, o que poderia impactar negativamente a experiência inicial dos novos funcionários. A automação foi criada utilizando VBA (Visual Basic for Applications) no Microsoft Excel, integrando o Selenium para a interação com o WhatsApp Web. O sistema é ativado automaticamente ao abrir a planilha, verificando se há novos funcionários programados para iniciar naquele dia. Quando identificados, o usuário é notificado sobre o número de mensagens a serem enviadas e tem a opção de iniciar o envio imediatamente ou optar por não executar a automação naquele momento. A base de dados utilizada pela automação é uma tabela atualizada diariamente pela equipe de RH, onde o dia de início de cada colaborador é registrado. A personalização das mensagens ocorre apenas no nome e no gênero do destinatário, seguindo um padrão estabelecido pela empresa. O arquivo de vídeo enviado junto com a mensagem é sempre o mesmo, um vídeo introdutório sobre a empresa e de boas-vindas ao trabalhador. Durante o processo de envio, a automação utiliza os cookies salvos do navegador para conectar-se automaticamente ao WhatsApp Web, eliminando a necessidade de escanear o QR code sempre que o sistema é usado. Caso o número do colaborador esteja incorreto ou a mensagem não seja entregue por algum motivo, o sistema registra a falha e informa o usuário ao final do processo. A automação exibe uma mensagem final indicando o número total de envios bem-sucedidos e eventuais falhas, que precisam ser resolvidas manualmente. Além de automatizar o envio das mensagens, o sistema foi desenvolvido para ser flexível e adaptável. As mensagens e o endereço do arquivo de vídeo são definidos diretamente na planilha, permitindo que os analistas de RH façam ajustes sem precisar acessar o código-fonte. Essa facilidade amplia o potencial de uso da ferramenta, que pode ser facilmente adaptada para outras finalidades, como lembretes de aniversários, convocações para treinamentos ou avisos de exames periódicos. Este projeto foi um marco na trajetória profissional do desenvolvedor, sendo o primeiro desafio real fora do ambiente acadêmico. O aprendizado foi constante e ocorreu simultaneamente à implementação, o que exigiu dedicação e habilidade para solucionar problemas rapidamente. A experiência adquirida com esse projeto serviu como base para outras automações e aprimorou o domínio de VBA e Selenium em cenários corporativos reais.",
                'en': "The project was developed to automate the sending of personalized welcome messages to new employees of a company using the WhatsApp Web interface. The main objective of the automation was to optimize the manual sending process, reducing the required time by approximately 93% and ensuring 100% accuracy in the personalization and delivery of messages. Before automation, the manual process was prone to human errors, which could negatively impact the initial experience of new employees. The automation was created using VBA (Visual Basic for Applications) in Microsoft Excel, integrating Selenium for interaction with WhatsApp Web. The system is automatically activated when the spreadsheet is opened, checking if there are new employees scheduled to start on that day. When identified, the user is notified of the number of messages to be sent and has the option to start sending immediately or choose not to run the automation at that time. The database used by the automation is a table updated daily by the HR team, where the start date of each employee is recorded. The personalization of messages occurs only in the name and gender of the recipient, following a standard established by the company. The video file sent along with the message is always the same, an introductory video about the company and a welcome message to the worker. During the sending process, the automation uses the saved browser cookies to connect automatically to WhatsApp Web, eliminating the need to scan the QR code every time the system is used. If the employee’s number is incorrect or the message is not delivered for any reason, the system logs the failure and informs the user at the end of the process. The automation displays a final message indicating the total number of successful deliveries and any failures that need to be resolved manually. In addition to automating message delivery, the system was developed to be flexible and adaptable. The messages and the video file address are defined directly in the spreadsheet, allowing HR analysts to make adjustments without needing to access the source code. This ease of use expands the tool’s potential, which can be easily adapted for other purposes, such as birthday reminders, training calls, or periodic exam notifications. This project was a milestone in the developer’s professional journey, being the first real challenge outside the academic environment. Learning was constant and occurred simultaneously with implementation, requiring dedication and skill to solve problems quickly. The experience gained from this project served as a foundation for other automations and improved mastery of VBA and Selenium in real corporate scenarios.",
                'it': "Il progetto è stato sviluppato per automatizzare l'invio di messaggi personalizzati di benvenuto ai nuovi collaboratori di un'azienda, utilizzando l'interfaccia di WhatsApp Web. L'obiettivo principale dell'automazione era ottimizzare il processo di invio manuale, riducendo il tempo necessario di circa il 93% e garantendo il 100% di precisione nella personalizzazione e nell'invio dei messaggi. Prima dell'automazione, il processo manuale era soggetto a errori umani, che potevano influire negativamente sull'esperienza iniziale dei nuovi dipendenti. L'automazione è stata creata utilizzando VBA (Visual Basic for Applications) in Microsoft Excel, integrando Selenium per l'interazione con WhatsApp Web. Il sistema si attiva automaticamente all'apertura del foglio di calcolo, verificando se ci sono nuovi collaboratori programmati per iniziare in quel giorno. Quando vengono identificati, l'utente viene notificato sul numero di messaggi da inviare e ha la possibilità di avviare l'invio immediatamente o scegliere di non eseguire l'automazione in quel momento. Il database utilizzato dall'automazione è una tabella aggiornata quotidianamente dal team delle risorse umane, dove viene registrata la data di inizio di ciascun collaboratore. La personalizzazione dei messaggi avviene solo nel nome e nel genere del destinatario, seguendo uno standard stabilito dall'azienda. Il file video inviato insieme al messaggio è sempre lo stesso, un video introduttivo sull'azienda e di benvenuto al lavoratore. Durante il processo di invio, l'automazione utilizza i cookie salvati dal browser per connettersi automaticamente a WhatsApp Web, eliminando la necessità di scansionare il codice QR ogni volta che il sistema viene utilizzato. Se il numero del collaboratore è errato o il messaggio non viene consegnato per qualsiasi motivo, il sistema registra l'errore e informa l'utente al termine del processo. L'automazione mostra un messaggio finale indicando il numero totale di invii riusciti e le eventuali falle, che devono essere risolte manualmente. Oltre ad automatizzare l'invio dei messaggi, il sistema è stato progettato per essere flessibile e adattabile. I messaggi e l'indirizzo del file video sono definiti direttamente nel foglio di calcolo, consentendo agli analisti delle risorse umane di apportare modifiche senza dover accedere al codice sorgente. Questa facilità amplia il potenziale utilizzo dello strumento, che può essere facilmente adattato per altri scopi, come promemoria per i compleanni, convocazioni per corsi di formazione o avvisi per esami periodici. Questo progetto è stato una pietra miliare nel percorso professionale dello sviluppatore, essendo la prima vera sfida al di fuori dell'ambiente accademico. L'apprendimento è stato costante e si è verificato contemporaneamente all'implementazione, richiedendo dedizione e abilità per risolvere rapidamente i problemi. L'esperienza acquisita con questo progetto è servita come base per altre automazioni e ha migliorato la padronanza di VBA e Selenium in scenari aziendali reali."
            },
            'details': {
                'pt': "Excel, VBA, Selenium, Chrome Driver, API WhatsApp",
                'en': "Excel, VBA, Selenium, Chrome Driver, WhatsApp API",
                'it': "Excel, VBA, Selenium, Chrome Driver, WhatsApp API"
            },
            'link': "https://github.com/Takater/HR-Automation-WhatsApp-WebScrapping"
        },
        {       // Automação CV Finder
            'title': {
                'pt': "CV Finder - Procura Automatizada de Candidatos",
                'en': "CV Finder - Automated Candidate Search",
                'it': "CV Finder - Ricerca automatica dei candidati"
            },
            'type': {
                'pt': project_types[2]['pt'],
                'en': project_types[2]['en'],
                'it': project_types[2]['it']
            },
            'longDescription': {
                'pt': "O  projeto consistiu no desenvolvimento de uma automação com UiPath para facilitar o trabalho do RH na busca de candidatos em diferentes sites. A ferramenta permitia que o usuário preenchesse um formulário com o título da vaga, nível de escolaridade, fontes de busca e número de resultados desejados, realizando então o web scraping automaticamente. A automação acessava sites como LinkedIn, Solides, Rondoniavivo, Geração Emprego e a caixa de e-mails do RH, até mesmo realizando login e superando captchas básicos quando necessário. Os dados capturados incluíam nome, e-mail, telefone, formação e empresa atual, sendo armazenados em uma planilha Excel gerada a cada execução, com macros VBA que organizavam as informações. O sistema evitava duplicações de candidatos e alertava o usuário com um pop-up sobre o número de candidatos encontrados. Não havia armazenamento de dados além da planilha gerada, garantindo a integridade das informações e a segurança dos dados. O projeto gerou uma economia de cerca de 98% no tempo de busca manual de candidatos e a documentação deixada permitia a expansão para novos sites futuramente.",
                'en': "The project involved developing an automation with UiPath to streamline the HR team's candidate search across multiple websites. The tool allowed the user to fill out a form with the job title, education level, search sources, and the number of desired results, then automatically performed web scraping. The automation accessed websites such as LinkedIn, Solides, Rondoniavivo, Geração Emprego, and the HR email inbox, even handling logins and overcoming basic captchas when needed. The captured data included name, email, phone number, education, and current company, which were stored in an Excel spreadsheet generated during each execution. The spreadsheet used VBA macros to organize information. The system prevented duplicate candidates and displayed a pop-up to inform the user of the total candidates found. No data was stored outside of the generated spreadsheet, ensuring data integrity and security. The project reduced candidate search time by approximately 98%, and the provided documentation enabled future expansion to new websites",
                'it': "Il progetto ha previsto lo sviluppo di un'automazione con UiPath per ottimizzare la ricerca di candidati da parte del team HR su diversi siti web. Lo strumento consentiva all'utente di compilare un modulo con il titolo della posizione, il livello di istruzione, le fonti di ricerca e il numero di risultati desiderati, eseguendo quindi automaticamente il web scraping. L'automazione accedeva a siti come LinkedIn, Solides, Rondoniavivo, Geração Emprego e alla casella di posta elettronica HR, gestendo anche l'accesso e superando captcha di base quando necessario. I dati raccolti includevano nome, e-mail, numero di telefono, formazione e azienda attuale, che venivano memorizzati in un foglio di calcolo Excel generato a ogni esecuzione. Il foglio utilizzava macro VBA per organizzare le informazioni. Il sistema preveniva duplicazioni di candidati e mostrava un pop-up per informare l'utente sul numero totale di candidati trovati. Non venivano memorizzati dati al di fuori del foglio di calcolo generato, garantendo l'integrità e la sicurezza dei dati. Il progetto ha ridotto il tempo di ricerca dei candidati di circa il 98%, e la documentazione fornita ha permesso future espansioni a nuovi siti web."
            },
            'details': {
                'pt': "UiPath, VBA, VB .Net, OCR",
                'en': "UiPath, VBA, VB .Net, OCR",
                'it': "UiPath, VBA, VB .Net, OCR"
            },
            'link': ""
        },
        {       // WordPress support
            'title': {
                'pt': "Manutenção em site WordPress",
                'en': "Maintenance on the WordPress site",
                'it': "Manutenzione sul sito WordPress"
            },
            'type': {
                'pt': project_types[3]['pt'],
                'en': project_types[3]['en'],
                'it': project_types[3]['it']
            },
            'longDescription': {
                'pt': "Atuei na manutenção de um site em WordPress, focado em e-commerce de produtos cosméticos de diversas marcas. O trabalho envolveu a correção de bugs de encaminhamento de links, ajustes na barra de busca e alterações em menus de navegação, sempre de acordo com as solicitações da cliente. Algumas intervenções exigiram acesso direto ao código-fonte e edições em PHP, garantindo a funcionalidade esperada pela cliente. Além disso, solucionei problemas críticos, como o site fora do ar devido ao uso excessivo do armazenamento da plataforma de hospedagem. Realizei a limpeza de arquivos desnecessários, incluindo backups antigos, permitindo a recuperação do site e a melhoria de performance. As ações realizadas não apenas restabeleceram o funcionamento do site, mas também aprimoraram a experiência do usuário, conduzindo os visitantes ao destino correto através de links ajustados e menus reestruturados. A relação positiva com a cliente levou à proposta de novos projetos, com o planejamento de futuras melhorias em SEO e experiência do usuário, já em fase de levantamento das prioridades e metas.",
                'en': "I worked on the maintenance of a WordPress website focused on e-commerce of cosmetic products from various brands. The job included fixing link redirection bugs, adjusting the search bar, and modifying navigation menus, always according to the client's requests. Some interventions required direct access to the source code and PHP edits, ensuring the expected functionality. Additionally, I resolved critical issues, such as the website being offline due to exceeding the hosting platform's storage limit. I cleaned up unnecessary files, including old backups, restoring the website and improving performance. The actions taken not only restored the website's functionality but also enhanced the user experience, guiding visitors to the correct paths through adjusted links and restructured menus. The positive relationship with the client led to new project proposals, with planned improvements in SEO and user experience, currently in the phase of assessing priorities and goals.",
                'it': "Ho lavorato alla manutenzione di un sito web WordPress focalizzato sull'e-commerce di prodotti cosmetici di diverse marche. Il lavoro ha incluso la correzione di bug di reindirizzamento dei link, la regolazione della barra di ricerca e la modifica dei menu di navigazione, sempre secondo le richieste della cliente. Alcuni interventi hanno richiesto l'accesso diretto al codice sorgente e modifiche in PHP, garantendo la funzionalità prevista. Inoltre, ho risolto problemi critici, come il sito offline a causa del superamento del limite di archiviazione della piattaforma di hosting. Ho eseguito la pulizia dei file non necessari, inclusi i vecchi backup, ripristinando il sito web e migliorandone le prestazioni. Le azioni intraprese non solo hanno ripristinato la funzionalità del sito, ma hanno anche migliorato l'esperienza dell'utente, guidando i visitatori verso i percorsi corretti tramite link regolati e menu ristrutturati. Il rapporto positivo con la cliente ha portato alla proposta di nuovi progetti, con miglioramenti pianificati in SEO e nell'esperienza utente, attualmente nella fase di valutazione delle priorità e degli obiettivi."
            },
            'details': {
                'pt': "WordPress, PHP, Javascript, Otimização de Mecanismos de Busca (SEO)",
                'en': "WordPress, PHP, Javascript, Search Engine Optimization (SEO)",
                'it': "WordPress, PHP, Javascript, Ottimizzazione dei Motori di Ricerca (SEO)"
            },
            'link': ""
        },
        {       // Python OpenCV support
            'title': {
                'pt': "Correção automatizada de gabarito",
                'en': "Automated Answer Sheet Grading",
                'it': "Correzione Automatica del Questionario"
            },
            'type': {
                'pt': `${project_types[2]['pt']}, ${project_types[3]['pt']}`,
                'en': `${project_types[2]['en']}, ${project_types[3]['en']}`,
                'it': `${project_types[2]['it']}, ${project_types[3]['it']}`
            },
            'longDescription': {
                'pt': "Eu aprimorei um sistema Python de correção de gabaritos, originalmente projetado para 10 questões, atendendo a uma demanda específica de um cliente. Adaptei o código para funcionar com 20 questões, ajustando a lógica para trabalhar com um layout onde as questões são dispostas horizontalmente e as alternativas verticalmente. Além disso, melhorei a interface de visualização dos resultados, implementando uma sobreposição com fundo preto e texto branco que garantiu melhor legibilidade e uma experiência de usuário superior. Esses ajustes ampliaram a funcionalidade do sistema e automatizaram o processo de correção, tornando-o mais robusto e visualmente intuitivo.",
                'en': "I enhanced a Python-based answer sheet grading system originally designed for 10 questions at the request of a client. I adapted the code to handle 20 questions by adjusting the logic to work with a layout where questions are arranged horizontally and answer options vertically. Additionally, I improved the result visualization interface by implementing an overlay with a black background and white text, ensuring better readability and an enhanced user experience. These modifications expanded the system's functionality and automated the grading process, making it more robust and visually intuitive.",
                'it': "Ho migliorato un sistema Python per la correzione dei questionari, originariamente progettato per 10 domande, su richiesta di un cliente. Ho adattato il codice per gestire 20 domande, modificando la logica per funzionare con un layout in cui le domande sono disposte orizzontalmente e le opzioni di risposta verticalmente. Inoltre, ho perfezionato l'interfaccia di visualizzazione dei risultati implementando una sovrapposizione con sfondo nero e testo bianco, garantendo così una migliore leggibilità e un'esperienza utente superiore. Questi aggiornamenti hanno ampliato le funzionalità del sistema e automatizzato il processo di correzione, rendendolo più robusto e visivamente intuitivo."
            },
            'details': {
                'pt': "Python, OpenCV, NumPy, Visão Computacional, UX, transformações matriciais",
                'en': "Python, OpenCV, NumPy, Computer Vision, UX, matrix transformations",
                'it': "Python, OpenCV, NumPy, Visione Computazionale, UX, trasformazioni matriciali"
            },
            'link': ""
        },
        
        
    ],
    projectsFilter: [
        {
            'pt': "Todos",
            'en': "All",
            'it': "Tutti"
        },
        ...project_types
    ],
    seeSourceCode: {
        'pt': "Veja o código fonte",
        'en': "See source code",
        'it': "Vedi il codice sorgente"
    },
    form: {
        'pageTitle': {
            'pt': "Orçamento de Projeto",
            'en': "Project Budget",
            'it': "Budget del progetto"
        },
        'username': {
            'pt': "Seu Nome",
            'en': "Your Name",
            'it': "Il tuo Nome"
        },
        'email': {
            'pt': "Seu E-mail",
            'en': "Your Email",
            'it': "Il tuo Email"
        },
        'phone': {
            'pt': "Seu Número de Telefone",
            'en': "Your Phone Number",
            'it': "Il tuo numero di telefono"
        },
        'devTypeLabel': {
            'pt': "Tipo de Desenvolvimento",
            'en': "Type of Development",
            'it': "Tipo di Sviluppo"
        },
        'devTypeOptions': [
            {
                'value': "DFS",
                'pt': "Desenvolvimento do zero",
                'en': "Development from scratch",
                'it': "Sviluppo da zero"
            },
            {
                'value': "NFEP",
                'pt': "Novos recursos em projeto existente",
                'en': "New features in existing project",
                'it': "Nuove funzionalità nel progetto esistente"
            },
            {
                'value': "SEP",
                'pt': "Suporte em projeto existente (sem recursos novos)",
                'en': "Support on existing project (no new features)",
                'it': "Supporto su progetti esistenti (nessuna nuova funzionalità)"
            }            
        ],
        'deadline': {
            'pt': "Prazo de entrega",
            'en': "Delivery deadline",
            'it': "Termine di consegna"
        },
        'deadlineOptions': [
            {
                'value': "1",
                'pt': "Sem prazo definido",
                'en': "No deadline set",
                'it': "Nessuna scadenza fissata"
            },
            {
                'value': "1.25",
                'pt': "Sem pressa (45 a 60 dias)",
                'en': "No rush (45 to 60 days)",
                'it': "Nessuna fretta (da 45 a 60 giorni)"
            },
            {
                'value': "1.5",
                'pt': "Um pouco de pressa (20 a 30 dias)",
                'en': "A bit of a rush (20 to 30 days)",
                'it': "Un po' di fretta (da 20 a 30 giorni)"
            },
            {
                'value': "2",
                'pt': "Com pressa (10 a 15 dias)",
                'en': "In a hurry (10 to 15 days)",
                'it': "In fretta (da 10 a 15 giorni)"
            },
            {
                'value': "2.5",
                'pt': "O mais rápido possível (5 a 7 dias)",
                'en': "As soon as possible (5 to 7 days)",
                "it": "Il prima possibile (da 5 a 7 giorni)"
            }
        ],
        'alerts': {
            'no-name': {
                'pt': "Desculpe, o nome no formulário parece estar faltando. Tente novamente, por favor.",
                'en': "Sorry, the name on the form appears to be missing. Please try again.",
                'it': "Spiacenti, il nome nel modulo sembra mancare. Riprova, per favore."
            },
            'no-email': {
                'pt': "Me desculpe, o seu e-mail parece estar faltando no formulário. Tente novamente, por favor.",
                'en': "Sorry, your email appears to be missing from the form. Please try again.",
                'it': "Spiacenti, il tuo indirizzo email sembra mancare nel modulo. Riprova più tardi."
            },
            'no-phone': {
                'pt': "Por favor, insera um número de telefone!",
                'en': "Please enter a phone number!",
                'it': "Per favore, inserisci un numero di telefono!"
            },
            'no-option': {
                'pt': "Por favor, selecione ao menos uma opção",
                'en': "Please select at least one option",
                'it': "Si prega di selezionare almeno un'opzione"
            },
            'no-description': {
                'pt': "Por favor, escreva uma descrição curta do que deseja",
                'en': "Please write a short description of what you want",
                'it': "Per favore scrivi una breve descrizione di ciò che desideri"
            },
            'too-long': {
                'pt': "Por favor, escreva uma descrição mais curta. Alinharemos os detalhes depois.",
                'en': "Please write a shorter description. We will fine-tune the details later.",
                'it': "Per favore scrivi una descrizione più breve. Più avanti definiremo i dettagli."
            }
        },
        secondPartLabel: {
            'pt': "Selecione todos os recursos que seu projeto pode incluir",
            'en': "Select all the features that your project might include",
            'it': "Seleziona tutte le funzionalità che il tuo progetto potrebbe includere"
        },
        descriptionLabel: {
            'pt': "Escreva uma pequena descrição do seu projeto",
            'en': "Write a short description of your project",
            'it': "Scrivi una breve descrizione del tuo progetto"
        },
        specificsCheckboxes: {
            'DFS': [
                {
                    'name': "multiple_pages",
                    'id': "MultiplePages",
                    'value': "70",
                    'pt': "Múltiplas páginas",
                    'en': "Multiple pages",
                    'it': "Pagine multiple"
                },
                {
                    'name': "various_users",
                    'id': "MultipleUsers",
                    'value': "80",
                    'pt': "Vários usuários",
                    'en': "Multiple users",
                    'it': "Utenti multipli"
                },
                {
                    'name': "register_and_login",
                    'id': "RegisterLogin",
                    'value': "50",
                    'pt': "Cadastro e Login",
                    'en': "Registration and Login",
                    'it': "Registrazione e Login"
                },
                {
                    'name': "record_data",
                    'id': "Database",
                    'value': "100",
                    'pt': "Gravar dados",
                    'en': "Record data",
                    'it': "Registra i dati"
                },
                {
                    'name': "internal_files",
                    'id': "FilesStorage",
                    'value': "100",
                    'pt': "Arquivos internos",
                    'en': "Internal Files",
                    'it': "File interni"
                },
                {
                    'name': "get_data_from_other_websites",
                    'id': "ExternalAPI",
                    'value': "50",
                    'pt': "Obter dados de outros sites",
                    'en': "Get data from other websites",
                    'it': "Ottieni dati da altri siti"
                },
                {
                    'name': "integrate_tool",
                    'id': "IntegrateTool",
                    'value': "75",
                    'pt': "Integrar com ferramenta externa",
                    'en': "Integrate with external tool",
                    'it': "Integrazione con strumento esterno"
                },
                {
                    'name': "online_payment",
                    'id': "PaymentOpt",
                    'value': "150",
                    'pt': "Serviço de pagamento online",
                    'en': "Online payment service",
                    'it': "Servizio di pagamento online"
                },
                {
                    'name': "multiple_languages",
                    'id': "MultiLang",
                    'value': "100",
                    'pt': "Múltiplos idiomas",
                    'en': "Multiple languages",
                    'it': "Diverse lingue"
                },
                {
                    'name': "generate_charts",
                    'id': "Charts",
                    'value': "50",
                    'pt': "Gerar gráficos",
                    'en': "Generate charts",
                    'it': "Generare grafici"
                },
                {
                    'name': "worksheet_formulas_or_macros",
                    'id': "Worksheet",
                    'value': "50",
                    'pt': "Planilha com fórmulas ou macros",
                    'en': "Spreadsheet with formulas or macros",
                    'it': "Foglio di calcolo con formule o macro"
                },
                {
                    'name': "power_bi",
                    'id': "PowerBi",
                    'value': "100",
                    'pt': "Painéis Power BI",
                    'en': "Power BI Dashboards",
                    'it': "Dashboard Power BI"
                },
                {
                    'name': "arduino_automation",
                    'id': "Arduino",
                    'value': "200",
                    'pt': "Automação Arduino",
                    'en': "Arduino Automation",
                    'it': "Automazione Arduino"
                },
                {
                    'name': "tasks_automation",
                    'id': "TasksAutomation",
                    'value': "120",
                    'pt': "Automatização de tarefas",
                    'en': "Task automation",
                    'it': "Automazione delle attività"
                },
                {
                    'name': "others",
                    'id': "AnotherOpt",
                    'value': "30",
                    'pt': "Outros",
                    'en': "Others",
                    'it': "Altri"
                }
            ],
            'NFEP': [
                {
                    'name': "new_page",
                    'id': "NewPage",
                    'value': "100",
                    'pt': "Nova página",
                    'en': "New page",
                    'it': "Nuova pagina"
                },
                {
                    'name': "new_user",
                    'id': "NewUser",
                    'value': "50",
                    'pt': "Novo usuário e suas permissões",
                    'en': "New user and their permissions",
                    'it': "Nuovo utente e i suoi permessi"
                },
                {
                    'name': "new_language",
                    'id': "NewLanguage",
                    'value': "80",
                    'pt': "Novo idioma",
                    'en': "New language",
                    'it': "Nuova lingua"
                },
                {
                    'name': "new_macro",
                    'id': "NewMacro",
                    'value': "50",
                    'pt': "Nova fórmula ou macro para Planilha",
                    'en': "New formula or macro for Spreadsheet",
                    'it': "Nuova formula o macro per un foglio di calcolo"
                },
                {
                    'name': "power_bi",
                    'id': "PowerBi",
                    'value': "100",
                    'pt': "Painéis Power BI",
                    'en': "Power BI Dashboards",
                    'it': "Dashboard Power BI"
                },
                {
                    'name': "integrate_tool",
                    'id': "IntegrateTool",
                    'value': "75",
                    'pt': "Integrar com ferramenta externa",
                    'en': "Integrate with external tool",
                    'it': "Integrazione con strumento esterno"
                },
                {
                    'name': "online_payment",
                    'id': "PaymentOpt",
                    'value': "150",
                    'pt': "Incluir serviço de pagamento online",
                    'en': "Include online payment service",
                    'it': "Includere il servizio di pagamento online"
                },
                {
                    'name': "process_automation",
                    'id': "ProcessAutomation",
                    'value': "100",
                    'pt': "Automatização de processo",
                    'en': "Process Automation",
                    'it': "Automazione dei processi"
                },
                {
                    'name': "new_feature",
                    'id': "NewFeature",
                    'value': "50",
                    'pt': "Outros novos recursos",
                    'en': "Other new features",
                    'it': "Altre nuove funzionalità"
                }
            ]
        },
        'newPages': {
            'pt': "Quantas novas páginas?",
            'en': "How many new pages?",
            'it': "Quante nuove pagine?"
        },
        'newLanguage': {
            'pt': "Quantas páginas?",
            'en': "How many pages?",
            'it': "Quante pagine?"
        },
        'charactersDescription': {
            'pt': "caracteres sobrando.",
            'en': "characters left",
            'it': "caratteri rimangono"
        },
        'generatePriceRange': {
            'pt': "Gerar faixa de preço",
            'en': "Generate price range",
            'it': "Generare intervallo di prezzo"
        },
        'priceRange': {
            'pt': ["O preço poderá variar de R$", " a R$"],
            'en': ["The price may vary from R$", " to R$"],
            'it': ["Il prezzo può variare da R$ ", " a R$ "]
        },
        'sendButton': {
            'pt': "Enviar",
            'en': "Send",
            'it': "Inviare"
        }
    },
    'budgetText': {
        'NewPage': {
            'pt': {
                's': "nova página",
                'p': "novas páginas"
            },
            'en': {
                's': "new page",
                'p': "new pages"
            },
            'it': {
                's': "nuova pagina",
                'p': "nuove pagine"
            }
        },
        'NewLanguage': {
            'pt': {
                'to': "para",
                's': "página",
                'p': "páginas"
            },
            'en': {
                'to': "to",
                's': "page",
                'p': "pages"
            },
            'it': {
                'to': "per",
                's': "pagina",
                'p': "pagine"
            }
        }
    },
    'descriptionMessage': {
        'name': {
            'pt': "*Nome :* ",
            'en': "*Name :* ",
            'it': "*Nome :* "
        },
        'email': {
            'pt': "*E-mail :* ",
            'en': "*Email :* ",
            'it': "*Email :* "
        },
        'phone': {
            'pt': "*Telefone :* ",
            'en': "*Phone :* ",
            'it': "*Telefono :* "
        },
        'typeDev': {
            'pt': "*Tipo de Desenvolvimento :* ",
            'en': "*Type of Development :* ",
            'it': "*Tipo di Sviluppo :* "
        },
        'deadline': {
            'pt': "*Prazo de entrega :* ",
            'en': "*Delivery deadline :* ",
            'it': "*Termine di consegna :* "
        },
        'features': {
            'pt': "*Recursos inclusos :* ",
            'en': "*Included features :* ",
            'it': "*Caratteristiche incluse :* "
        },
        'estimatedPrice': {
            'pt': ["*Preço estimado :* de R$", " a R$"],
            'en': ["*Estimated price :* from R$", " to R$"],
            'it': ["*Prezzo stimato :* da R$ ", " a R$ "]
        },
        'description': {
            'pt': "*Descrição :* ",
            'en': "*Description :* ",
            'it': "*Descrizione :* "
        }
    },
    'descriptionWords': [
        // Programming
        {
            'value': 75,
            'words': ["python", "javascript", "php", "java", "sql", "html", "css", "typescript", "c", "arduino", "vba"]
        },

        // Frameworks
        {
            'value': 50,
            'words': ["react", "node", "js", "node.js", "spring", "boot", "django", "flask", "hibernate", "jquery", "bootstrap", "pandas", "matplotlib", "numpy", "opencv", "tensorflow"]
        },

        // Database
        {
            'value': 50,
            'words': ["mysql", "postgresql", "mongodb", "sql server", "sqlite", "firebase", "aws"]
        },

        // Tools
        {
            'value': 75,
            'words': [
                        "docker", "kubernets", "wordpress", "jenkins", "postman", "pod", "pods", "api", "linx", "git", "github", "gitlab", "excel", 
                        "netlify", "hostgator", "agile", "kanban", "scrum", "whatsapp", "instagram", "e-mail", "email", "chatbot", "chat", "bot",
                        "ecommerce", "e-commerce", "landing", "page", "blog", "crm", "dashboard", "seo", "backup", "app"
                    ]
        },

        // OS and Servers
        {
            'value': 100,
            'words': ["linux", "windows", "unix", "redhat", "tomcat", "container", "containers"]
        },

        // Others
        {
            'value': 25,
            'pt': [
                    "site", "website", "formulário", "manutenção", "consertar", "suporte", "integrar","integração", "automação", "segurança", "configuração", 
                    "configurar", "ajuste", "ajustar", "correção", "corrigir", "otimização", "otimizar", "planilha", "precificação", "orçamento", "hospedagem",
                    "aplicativo", "aplicação", "completo", "completa"
                ],
            'en': [
                    "website", "form", "maintenance", "fix", "support", "integrate", "integration", "automation", "security", "configuration", "configure", 
                    "adjustment", "adjust", "correction", "correct", "optmization", "optimize", "spreadsheet", "worksheet", "budget", "precification", "hosting",
                    "application", "complete"
                ],
            'it': [
                    "sito", "web", "modulo", "manutenzione", "risolvere", "aggiustare", "supporto", "integrare", "integrazione", "automazione", "sicurezza",
                    "configurazione", "configurare", "regolazione", "regolare", "correzione", "correggere", "ottimizazione", "ottimizzare", "foglio", "calcolo",
                    "precisazione", "budget", "hosting", "applicazione", "completa"
                ]
        }
    ],
    'contact': {
        'phone': {
            'pt': "Telefone",
            'en': "Phone",
            'it': "Telefono"
        },
        'or': {
            'pt': "Ou",
            'en': "Or",
            'it': "O"
        },
        'whatsapp': {
            'pt': "Olá,%20Guilherme!%20Eu%20vim%20do%20seu%20Portfólio.%20Prazer%20em%20te%20conhecer!",
            'en': "Hello,%20Guilherme!%20I%20came%20from%20your%20Portfolio.%20Nice%20to%20meet%20you!",
            'it': "Ciao,%20Guilherme!%20Provengo%20dal%20tuo%20Portfolio.%20Piacere%20di%20conoscerti!"
        },
        'contactme': {
            'pt': "Contate-me",
            'en': "Contact me",
            'it': "Contattami"
        }
    }
}

export default Texts;