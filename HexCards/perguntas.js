const perguntas = [
    {id:1, dinamica: false, pergunta:"_____: TESTADO PELAS CRIANÇAS, APROVADO PELAS MÃES."},
    {id:2, dinamica: false, pergunta:"ELE PERGUNTOU: NO CÉU TEM ____? E MORREU."},
    {id:3, dinamica: false, pergunta:"NO FUTURO DISTANTE, HISTORIADORES IRÃO CONCORDAR QUE  _____ MARCOU O INÍCIO DO DECLÍNIO DA AMÉRICA. "},
    {id:4, dinamica: false, pergunta:"QUAL É O PRÓXIMO BRINQUEDO DO MCLANCHE FELIZ?"},
    {id:5, dinamica: false, pergunta:"NO PRÓXIMO NATAL O PAPAI NOEL VAI DAR ____ PRA CRIANÇA QUE NÃO SE COMPORTAR."},
    {id:6, dinamica: false, pergunta:"A VIDA DOS ÍNDIOS MUDOU PARA SEMPRE DEPOIS QUE O HOMEM BRANCO OS APRESENTOU A _____."},
    {id:7, dinamica: false, pergunta:"DURANTE O SEXO EU GOSTO DE PENSAR SOBRE ______."},
    {id:8, dinamica: false, pergunta:"A VIDA DOS ÍNDIOS AMERICANOS MUDOU PARA SEMPRE QUANDO O HOMEM BRANCO LHES APRESENTOU ____."},
    {id:9, dinamica: false, pergunta:"MINHA MÃE ENTROU EM DESESPERO QUANDO ELA ABRIU MEU HISTÓRICO DA INTERNET E VIU ____.COM "},
    {id:10, dinamica: false, pergunta:"O PRÓXIMO LIVRO DE  J.K. ROWLING: HARRY POTTER E A CÂMARA DE ______."},
    {id:11, dinamica: false, pergunta:"O QUE O MINISTÉRIO DA EDUCAÇÃO ESTÁ USANDO PARA INSPIRAR OS ESTUDANTES DO INTERIOR A SEREM BEM SUCEDIDOS?"},
    {id:12, dinamica: false, pergunta:"E ENTÃO, CRIANÇAS, FOI ASSIM QUE EU CONHECI _____."},
    {id:13, dinamica: false, pergunta:"O QUE EU FARIA POR UM PONTO DE EXPERIÊNCIA?"},
    {id:14, dinamica: false, pergunta:"TALVEZ SEJA ____."},
    {id:15, dinamica: false, pergunta:"OS CINCO ESTÁGIOS DO LUTO: NEGAÇÃO, RAIVA, BARGANHA, _____ E ACEITAÇÃO."},
    {id:16, dinamica: false, pergunta:"O PRÓXIMO FILME  DE MICHAEL BAY: _____."},
    {id:17, dinamica: false, pergunta:"EM SEUS MOMENTOS FINAIS, MICHAEL JACKSON PENSOU EM ____."},
    {id:18, dinamica: false, pergunta:"REALMENTE VIVEU ATÉ TER EXPERIMENTADO _____."},
    {id:19, dinamica: false, pergunta:"NO NOVO FILME DE M. NIGHT SHYAMALAN, BRUCE WILLIS DESCOBRE QUE NA VERDADE ERA ____ DESDE O INÍCIO."},
    {id:20, dinamica: false, pergunta:"HOMEM BRANCO GOSTA DE ____."},
    {id:21, dinamica: false, pergunta:"SE DEUS NÃO QUISESSE QUE APROVEITÁSSEMOS ____, ELE NÃO TERIA NOS DADO."},
    {id:22, dinamica: false, pergunta:"É PERIGOSO IR SOZINHO, LEVE  _____."},
    {id:23, dinamica: false, pergunta:"____. QUEM SÃO, ONDE VIVEM, O QUE COMEM? ESSA NOITE  NO GLOBO REPÓRTER."},
    {id:24, dinamica: false, pergunta:"A POLÍCIA MILITAR ESTÁ AGORA USANDO _____ COMO UMA ARMA DE COMBATE AO CRIME."},
    {id:25, dinamica: false, pergunta:"QUAL É O MELHOR AMIGO DE UMA MULHER?"},
    {id:26, dinamica: false, pergunta:"POR QUE ESTOU DOIDO?"},
    {id:27, dinamica: false, pergunta:"QUAL A PRIMEIRA COISA QUE VOCÊ FAZ DEPOIS DE ACORDAR?"},
    {id:28, dinamica: false, pergunta:"EU VI UM FILME LOUCO ONTEM. ELE FALA SOBRE _____."},
    {id:29, dinamica: false, pergunta:"EU PRESENCIEI AS MELHORES MENTES DA MINHA GERAÇÃO SEREM DESTRUÍDAS POR _____."},
    {id:30, dinamica: false, pergunta:"COMO EU ESTOU COMPENSANDO PELO MEU MINÚSCULO PÊNIS?"},
    {id:31, dinamica: false, pergunta:"QUANDO EU FOR O PRESIDENTE DO BRASIL, EU VOU CRIAR O MINISTÉRIO DE _____."},
    {id:32, dinamica: false, pergunta:"A SEGUIR, NA ESPN 2: O CAMPEONATO MUNDIAL DE _____."},
    {id:33, dinamica: false, pergunta:"UM JANTAR ROMÂNTICO À LUZ DE VELAS SERIA INCOMPLETO SEM ____."},
    {id:34, dinamica: false, pergunta:"QUANDO EU ESTOU COM INSÔNIA, EU ADORO _____."},
    {id:35, dinamica: false, pergunta:" _____ É A RAIZ DE  TODO O MAL."},
    {id:36, dinamica: false, pergunta:"EM BREVE, NUMA LIVRARIA PERTO DE  VOCÊ, ____."},
    {id:37, dinamica: false, pergunta:"A ÚNICA FORMA DE COMBATER O MAL É COM ____!"},
    {id:38, dinamica: false, pergunta:"EU BEBO PARA ESQUECER _____."},
    {id:39, dinamica: false, pergunta:"O QUE NÃO PODE FALTAR EM UMA SURUBA?"},
    {id:40, dinamica: false, pergunta:"A EXCURSÃO ESCOLAR FOI UM FIASCO DEVIDO A ____."},
    {id:41, dinamica: false, pergunta:"QUANDO TUDO FALHAR EU SEMPRE POSSO ME MASTURBAR PARA _____."},
    {id:42, dinamica: false, pergunta:"QUAL É O MELHOR AMIGO DE UMA GAROTA?"},
    {id:43, dinamica: false, pergunta:"VOCÊ. EU. _____. AGORA!"},
    {id:44, dinamica: false, pergunta:"A VIDA ERA DIFÍCIL PARA OS HOMENS DAS CAVERNAS ANTES DE _____."},
    {id:45, dinamica: false, pergunta:"DOUTOR DRAUZIO, ESTOU TENDO PROBLEMAS COM ____ E GOSTARIA DE OUVIR SEU CONSELHO."},
    {id:46, dinamica: false, pergunta:"POR NÃO PAGAR MINHAS CONTAS, O BANCO ME TIROU ____."},
    {id:47, dinamica: false, pergunta:"POR QUE EU LEVEI UMA SURRA NA ESCOLA?"},
    {id:48, dinamica: false, pergunta:"QUANDO EU FOR PRESIDENTE, CRIAREI O DEPARTAMENTO DE ____."},
    {id:49, dinamica: false, pergunta:"O QUE JOSÉ SARNEY PREFERE?"},
    {id:50, dinamica: false, pergunta:"QUAL SEU FETICHE MAIS ESTRANHO?"},
    {id:51, dinamica: false, pergunta:"POR QUE SEU CRUSH FUGIU QUANDO TE VIU?"},
    {id:52, dinamica: false, pergunta:"SE FOSSE PARTICIPAR DE UM FILME ADULTO, COMO SERIA O TÍTULO?"},
    {id:53, dinamica: false, pergunta:"O QUE FARIA SE DESCOBRISSE QUE HOJE É O SEU ÚLTIMO DIA DE VIDA?"},
    {id:54, dinamica: false, pergunta:"O QUE SUA MÃE VIU VOCÊ FAZENDO NO SEU QUARTO AS 3H DA MANHÃ?"},
    {id:55, dinamica: false, pergunta:"O QUE NÃO PODE FALTAR NO PIQUINIQUE EM FAMÍLIA?"},
    {id:56, dinamica: false, pergunta:"QUAL A PRIMEIRA COISA QUE VOCÊ PENSA QUANDO OUVE ALGUEM DIZER SOBRE SEXO? "},
    {id:57, dinamica: false, pergunta:"QUAL É O NOME DA MÚSICA QUE RESUME SUA VIDA?"},
    {id:58, dinamica: false, pergunta:"O QUE MEUS PAIS ESTÃO ESCONDENDO DE MIM?"},
    {id:59, dinamica: false, pergunta:"O QUE VOCÊ FAZ NA FRENTE DO SEUS PAIS?"},
    {id:60, dinamica: false, pergunta:"OH NÃO! _____! MINHA ÚNICA FRAQUEZA!"},
    {id:61, dinamica: false, pergunta:"O HOMEM-_____ NÃO ERA NEM O HERÓI QUE PRECISÁVAMOS NEM O QUE QUERÍAMOS."},
    {id:62, dinamica: false, pergunta:"O QUE NUNCA FALHA EM DEIXAR UMA FESTA MAIS ANIMADA?"},
    {id:63, dinamica: false, pergunta:"QUANTA DOR VOCÊ ESTÁ SENTINDO?"},
    {id:64, dinamica: false, pergunta:"ENTÃO É ASSIM QUE O MUNDO ACABA, NÃO COM UMA EXPLOSÃO, MAS COM _____."},
    {id:65, dinamica: false, pergunta:"O QUE É MELHOR QUANDO ENVELHECE?"},
    {id:66, dinamica: false, pergunta:"ANTROPÓLOGOS RECENTEMENTE  DESCOBRIRAM UMA TRIBO QUE LOUVA _____."},
    {id:67, dinamica: false, pergunta:"____: BOM ATÉ A ÚLTIMA GOTA."},
    {id:68, dinamica: false, pergunta:"SE ENTRA ____, ENTRA QUALQUER COISA!"},
    {id:69, dinamica: false, pergunta:"ESTOU COM 99 PROBLEMAS, MAS ____ NÃO É UM DELES."},
    {id:70, dinamica: false, pergunta:"PODERIA O ESCRIVÃO DA CORTE LER DE VOLTA ESSA ÚLTIMA FRASE?"},
    {id:71, dinamica: false, pergunta:"____. É UMA ARMADILHA!"},
    {id:72, dinamica: false, pergunta:"EU QUERO ____ NA MINHA MESA ATÉ AS 5, OU VOCÊ ESTÁ DEMITIDO!"},
    {id:73, dinamica: false, pergunta:"NO SÉTIMO CÍRCULO DO INFERNO, PECADORES DEVEM SOFRER COM ____ POR TODA A ETERNIDADE."},
    {id:74, dinamica: false, pergunta:"NOVO REALITY-SHOW DA MTV APRESENTA OITO CELEBRIDADES DESGASTADAS MORANDO COM ____."},
    {id:75, dinamica: false, pergunta:"É, EU TIVE QUE TERMINAR COM ELE. ELE FICAVA USANDO _____ COMO UM EUFEMISMO PARA TRANSAR. "},
    {id:76, dinamica: false, pergunta:"EU APRENDI DA FORMA DIFÍCIL QUE VOCÊ NÃO PODE CONSOLAR UM AMIGO DE LUTO COM _____."},
    {id:77, dinamica: false, pergunta:"O QUE É QUE VOVÓ ACHARIA PERTURBANTE, MAS ESTRANHAMENTE  CHARMOSO?"},
    {id:78, dinamica: false, pergunta:"NÓS PERGUNTAMOS PARA 1000 MULHERES: O QUE ELAS REALMENTE QUEREM EM UM HOMEM?"},
    {id:79, dinamica: false, pergunta:"COME _____ MEU BEM, FAZ BEM PARA A SAÚDE."},
    {id:80, dinamica: false, pergunta:"VOCÊ NÃO VAI ACREDITAR NO QUE ENCONTREI NA MINHA CAMA: _____"},
    {id:81, dinamica: false, pergunta:"A FESTA REALMENTE COMEÇA QUANDO ALGUÉM TRAZ _____"},
    {id:82, dinamica: false, pergunta:"DE REPENTE, _____ APARECEU NO PALCO E TODOS FICARAM CHOCADOS"},
    {id:83, dinamica: false, pergunta:"HOJE, O CARRO AO LADO NO TRÂNSITO TINHA UMA AUTOCOLANTE ENGRAÇADA SOBRE _____"},
    {id:84, dinamica: false, pergunta:"VOCÊ PODE RESOLVER QUALQUER COISA COM _____ E UM GRAMPO"},
    {id:85, dinamica: false, pergunta:"ACABEI DE RECEBER UMA CAIXA CHEIA DE _____ COMO PRESENTE"},
    {id:86, dinamica: false, pergunta:"VOCÊ NÃO QUER SABER O QUE ACONTECEU QUANDO COLOQUEI _____ NO MICRO-ONDAS"},
    {id:87, dinamica: false, pergunta:"EU NUNCA VOU ESQUECER O DIA EM QUE MEU VIZINHO GRITOU SOBRE _____"},
    {id:88, dinamica: false, pergunta:"A MELHOR MANEIRA DE IMPRESSIONAR ALGUÉM É COM _____"},
    {id:89, dinamica: false, pergunta:"NADA MELHOR DO QUE COMER _____ DEPOIS DE UM DIA LONGO"},
    {id:90, dinamica: false, pergunta:"NOSSA, EU REALMENTE PRECISO PARAR DE COLECIONAR _____"},
    {id:91, dinamica: false, pergunta:"O JUIZ ME ABSOLVEU PORQUE _____ NÃO É TECNICAMENTE UM CRIME."},
    {id:92, dinamica: false, pergunta:"_____. É IMPOSSÍVEL COMER UM SÓ!"},
    {id:93, dinamica: false, pergunta:"ACHAMOS UMA RECEITA QUE USA ____ COMO INGREDIENTE PRINCIPAL"},
    {id:94, dinamica: false, pergunta:"____ NO CAFÉ DA MANHÃ? CLARO, POR QUE NÃO?"},
    {id:95, dinamica: false, pergunta:"ESCUTEI UM BARULHO E DESCOBRI QUE ERA _____ NO MEU SÓTÃO"},
    {id:96, dinamica: false, pergunta:"SE EU TIVESSE UM REAL PARA CADA VEZ QUE ENCONTREI _____, SERIA RICO"},
    {id:97, dinamica: false, pergunta:"QUEM PODERIA IMAGINAR QUE MEU AMULETO DE SORTE SERIA ____?"},
    {id:98, dinamica: false, pergunta:"A CENA MAIS ESTRANHA ACONTECEU QUANDO MEU VIZINHO ME VIU COM ____"},
    {id:99, dinamica: false, pergunta:"____ É A MELHOR TERAPIA, SEM DÚVIDA"},
    {id:100, dinamica: false, pergunta:"TIVE UM SONHO ESTRANHO COM ____ NA NOITE PASSADA"},
    {id:101, dinamica: false, pergunta:"SE VOCÊ ADICIONAR ____ AO GUACAMOLE, FICA INCRÍVEL"},
    {id:102, dinamica: false, pergunta:"NUNCA PENSEI QUE ME TORNARIA TÃO BOM EM LIDAR COM ____"},
    {id:103, dinamica: false, pergunta:"VOCÊ SABIA QUE ____ É UM ÓTIMO REPELENTE DE INSETOS?"},
    {id:104, dinamica: false, pergunta:"SEMPRE LEVO ____ COMIGO EM VIAGENS, NUNCA SE SABE"},
    {id:105, dinamica: false, pergunta:"HOJE, EU APRENDI QUE ____ PODE REALMENTE MELHORAR UM JANTAR"},
    {id:106, dinamica: false, pergunta:"ACHO QUE MINHA MÃE ESCONDE ____ NO PORÃO"},
    {id:107, dinamica: false, pergunta:"VOCÊ JÁ TENTOU FAZER PANQUECAS DE ____? É INCRÍVEL"},
    {id:108, dinamica: false, pergunta:"TIVE QUE RIR QUANDO MEU CHEFE ME PEDIU PARA TRAZER ____ PARA O ESCRITÓRIO"},
    {id:109, dinamica: false, pergunta:"EU NÃO POSSO SAIR DE CASA SEM ____ NO BOLSO"},
    {id:110, dinamica: false, pergunta:"MINHA TÉCNICA SECRETA PARA LIDAR COM O STRESS É ____"},
    {id:111, dinamica: false, pergunta:"NÃO ACREDITO QUE GASTEI TODO O MEU DINHEIRO EM ____ ESTA SEMANA!"},
    {id:112, dinamica: false, pergunta:"SE HOUVESSE UM CAMPEONATO DE ____, EU SERIA O GRANDE CAMPEÃO."},
    {id:113, dinamica: false, pergunta:"SEMPRE TENHO UMA RESERVA DE ____ NA GELADEIRA."},
    {id:114, dinamica: false, pergunta:"O QUE ACONTECE NO MEU PORÃO FICA NO MEU PORÃO, ESPECIALMENTE ____"},
    {id:115, dinamica: false, pergunta:"____ NO CAFÉ DA MANHÃ É UM HÁBITO ESTRANHO, MAS FUNCIONA."},
    {id:116, dinamica: false, pergunta:"ESQUECI DE COMPRAR ____, E AGORA A RECEITA FICOU INCOMPLETA."},
    {id:117, dinamica: false, pergunta:"MINHA AVÓ SEMPRE DIZIA: 'UM DIA SEM ____ É UM DIA PERDIDO'."},
    {id:118, dinamica: false, pergunta:"SE VOCÊ TIVER UM ENCONTRO RUIM, A CULPA É PROVAVELMENTE DE ____."},
    {id:119, dinamica: false, pergunta:"____ É O MELHOR AMIGO DE UM SÁBADO À NOITE."},
    {id:120, dinamica: false, pergunta:"TODO MUNDO DEVERIA EXPERIMENTAR PELO MENOS UMA VEZ NA VIDA: ____."},
    {id:121, dinamica: false, pergunta:"VOCÊ JÁ PERCEBEU COMO ____ PODE MUDAR O AMBIENTE DE UM LUGAR?"},
    {id:122, dinamica: false, pergunta:"NA DÚVIDA, COLOQUE ____ E TUDO VAI FICAR BEM."},
    {id:123, dinamica: false, pergunta:"____ É A ÚNICA COISA QUE ME FAZ SAIR DA CAMA DE MANHÃ."},
    {id:124, dinamica: false, pergunta:"PARECE QUE MEU VIZINHO TEM UMA COLEÇÃO SECRETA DE ____."},
    {id:125, dinamica: false, pergunta:"O CHEIRO DE ____ PELA MANHÃ É INIGUALÁVEL."},
    {id:126, dinamica: false, pergunta:"TIVE QUE FAZER UMA VIAGEM DE EMERGÊNCIA PARA COMPRAR ____."},
    {id:127, dinamica: false, pergunta:"____ SEMPRE RESOLVE OS PROBLEMAS DO DIA."},
    {id:128, dinamica: false, pergunta:"TODO ESCRITÓRIO DEVERIA TER UMA POLÍTICA DE ____."},
    {id:129, dinamica: false, pergunta:"QUANDO ESTIVER COM ALGUMA DÚVIDA, FAÇA ____."},
    {id:130, dinamica: false, pergunta:"ALGUNS DIZEM QUE ____ É A CHAVE DA FELICIDADE."},
    {id:131, dinamica: false, pergunta:"NINGUÉM ESPERAVA ENCONTRAR ____ NA PIZZA, MAS FICOU INCRÍVEL."},
    {id:132, dinamica: false, pergunta:"OI, NÓS SOMOS DA IGREJA A UNIVERSAL, VOCÊ TEM UM MINUTO PRA FALAR SOBRE ____?"},
    {id:133, dinamica: false, pergunta:"AQUELE QUE CONTROLA _____ CONTROLA O MUNDO."},
    {id:134, dinamica: false, pergunta:"O QUE CAUSOU O FIM DA MINHA ÚLTIMA RELAÇÃO?"},
    {id:135, dinamica: false, pergunta:"O BANHEIRO ESTAVA SEM PAPEL HIGIÊNICO, ENTÃO EU TIVE QUE USAR ____."},
    {id:136, dinamica: false, pergunta:"QUE SOM É ESSE? "},
    {id:137, dinamica: false, pergunta:"AS IGREJAS ESTÃO AGORA ACEITANDO ____ COMO FORMA DE PAGAMENTO."},
    {id:138, dinamica: false, pergunta:"QUAL É O MEU PODER SECRETO?"},
    {id:139, dinamica: false, pergunta:"____. É ASSIM QUE EU ESPERO MORRER."},
    {id:140, dinamica: false, pergunta:"É UMA PENA QUE CRIANÇAS HOJE EM DIA ESTEJAM SE ENVOLVENDO COM ____."},
    {id:141, dinamica: false, pergunta:"POR QUE MINHA PELE ESTÁ PEGAJOSA?"},
    {id:142, dinamica: false, pergunta:"SE VOCÊ ESTIVESSE NUMA ILHA DESERTA, O QUE NÃO PODERIA FALTAR?"},
    {id:143, dinamica: false, pergunta:"DEVIDO À UM FIASCO DE RELAÇÕES PÚBLICAS, AS LOJAS AMERICANAS NÃO VENDEM MAIS ____."},
    {id:144, dinamica: false, pergunta:"O FUNK DO ____ ACABOU DE ATINGIR O TOP 10 BRASIL."},
    {id:145, dinamica: false, pergunta:"SE EU CRIASSE O PARAÍSO, _____ SERIA A PRIMEIRA COISA QUE FARIA"},
    {id:146, dinamica: false, pergunta:"A INFRAERO AGORA PROÍBE _____ EM AVIÕES."},
    {id:147, dinamica: false, pergunta:"QUAL É O PRÓXIMO BRINDE DO MCLANCHE FELIZ?"},
    {id:148, dinamica: false, pergunta:"A CIA AGORA INTERROGA AGENTES INIMIGOS SUJEITANDO-OS À _____."},
    {id:149, dinamica: false, pergunta:"O QUE É QUE TEM À VONTADE NO CÉU?"},
    {id:150, dinamica: false, pergunta:"NÃO É MINHA CULPA, EU VOTEI PARA ____."},
    {id:151, dinamica: false, pergunta:"NÃO SEI COM QUE ARMAS SE LUTARÁ A TERCEIRA GUERRA MUNDIAL, MAS A QUARTA SERÁ COM ____."},
    {id:152, dinamica: false, pergunta:"EU COMECEI A SEGUIR ESSA NOVA DIETA DE MILHO, OVOS E ____."},
    {id:153, dinamica: false, pergunta:"E ENTÃO DEUS DISSE: QUE SE FAÇA _____."},
    {id:154, dinamica: false, pergunta:"ELE COLOU UM MONTE DE ____ NA PAREDE DA SALA."},
    {id:155, dinamica: false, pergunta:"QUE DESCULPA VOCÊ DÁ PARA NÃO BEIJAR O CARA FEIO DA BALADA?"},
    {id:156, dinamica: false, pergunta:"SE VOCÊ É O QUE VOCÊ COME, ENTÃO EU DEFINITIVAMENTE SOU ____."},
    {id:157, dinamica: false, pergunta:"O QUE DEIXOU ESSA MANCHA NO MEU SOFÁ?"},
    {id:158, dinamica: false, pergunta:"O QUE É TIRO-E-QUEDA PARA SE CONSEGUIR SEXO?"},
    {id:159, dinamica: false, pergunta:"EU ME SENTI MUITO MAL DEPOIS DE CONVENCER MEU AMIGO QUE ELE ERA ____."},
    {id:160, dinamica: false, pergunta:"NA SUA NOVA CAMPANHA DE TURISMO, O RIO DE JANEIRO ORGULHOSAMENTE ANUNCIOU QUE FINALMENTE ELIMINOU ____."},
    {id:161, dinamica: false, pergunta:"POR QUE NÃO CONSIGO DORMIR À NOITE?"},
    {id:162, dinamica: false, pergunta:"VAI AMOR, BATE NA MINHA BUNDA E ME CHAMA DE ____."},
    {id:163, dinamica: false, pergunta:"QUE CHEIRO É ESSE? "},
    {id:164, dinamica: false, pergunta:"A INTERNET FOI INVENTADA PARA ____."},
    {id:165, dinamica: false, pergunta:"O QUE AJUDOU OBAMA A RELAXAR DEPOIS DO TRABALHO?"},
    {id:166, dinamica: false, pergunta:"O NOVO PROJETO DE LEI DECLARA O DIA DE _____ UM FERIADO NACIONAL."},
    {id:167, dinamica: false, pergunta:"O QUE FICA MELHOR COM A IDADE?"},
    {id:168, dinamica: false, pergunta:"ANTROPÓLOGOS RECENTEMENTE DESCOBRIRAM UMA TRIBO PRIMITIVA QUE CULTUA ____."},
    {id:169, dinamica: false, pergunta:"FINALMENTE! UM SERVIÇO QUE ENTREGA _____ DIRETO NA SUA PORTA!"},
    {id:170, dinamica: false, pergunta:"ESTUDO MOSTRA QUE RATOS DE LABORATÓRIO ATRAVESSAM LABIRINTOS 50% MAIS RÁPIDO DEPOIS DE SEREM EXPOSTOS À ____."},
    {id:171, dinamica: false, pergunta:"DURANTE MEU TEMPO EM HOGWARTS, EU DESCOBRI QUE MEU PATRONO ERA _____."},
    {id:172, dinamica: false, pergunta:"AO INVÉS DE CARVÃO, PAPAI NOEL AGORA DÁ _____ À CRIANÇAS MALCRIADAS."},
    {id:173, dinamica: false, pergunta:"EU CRIEI UM NOVO SITE, É BASICAMENTE FACEBOOK PARA _____."},
    {id:174, dinamica: false, pergunta:"MEU PROFESSOR DE EDUCAÇÃO FÍSICA FOI DEMITIDO POR ADICIONAR _____ AO CURSO DE OBSTÁCULOS."},
    {id:175, dinamica: false, pergunta:"BUSCANDO AUMENTAR SUA AUDIÊNCIA, O MUSEU DE HISTÓRIA NATURAL ABRIU UMA EXPOSIÇÃO INTERATIVA SOBRE ____."},
    {id:176, dinamica: false, pergunta:"PENSANDO MELHOR, TER LEVADO MINHA NOVA NAMORADA NO ____ NÃO FOI UMA BOA IDEIA."},
    {id:177, dinamica: false, pergunta:"E EU TERIA ESCAPADO SE NÃO FOSSE POR _____!"},
    {id:178, dinamica: false, pergunta:"____ É O MELHOR REMÉDIO PARA DEPRESSÃO."},
    {id:179, dinamica: false, pergunta:"A CIÊNCIA NUNCA VAI EXPLICAR A ORIGEM DE _____."},
    {id:180, dinamica: false, pergunta:"O QUE ME CAUSA GASES INCONTROLÁVEIS?"},
    {id:181, dinamica: false, pergunta:"AINDA PRECISO ENCONTRAR ____ PARA COMPLETAR O RITUAL DE INVOCAÇÃO."},
    {id:182, dinamica: false, pergunta:"A MEDICINA ALTERNATIVA ESTÁ AGORA RECONHECENDO OS PODERES CURATIVOS DE _____."},
    {id:183, dinamica: false, pergunta:"IDOSOS TEM CHEIRO DE QUÊ?"},
    {id:184, dinamica: false, pergunta:"O SEGREDO PARA MEUS CABELOS SEDOSOS? ____."},
    {id:185, dinamica: false, pergunta:"_____, NÃO É NADA QUE NÃO POSSA CONSERTAR."},
    {id:186, dinamica: false, pergunta:"O QUE VOU DEIXAR DE FAZER NA QUARESMA?"},
    {id:187, dinamica: false, pergunta:"EM ROMA, EXISTEM RUMORES QUE O VATICANO POSSUI UMA SALA SECRETA DEDICADA À _____."},
    {id:188, dinamica: false, pergunta:"A MEDICINA ALTERNATIVA AGORA ESTÁ EXPLORANDO OS PODERES CURATIVOS DE ____."},
    {id:189, dinamica: false, pergunta:"____. A NOVA SÉRIE ORIGINAL DO NETFLIX."},
    {id:190, dinamica: false, pergunta:"DINHEIRO PODE NÃO ME COMPRAR AMOR, MAS PODE ME COMPRAR ______."},
    {id:191, dinamica: false, pergunta:"O QUE OS EUA JOGARAM, DE AVIÃO, ÀS CRIANÇAS DO AFEGANISTÃO?"},
    {id:192, dinamica: false, pergunta:"RESOLUÇÃO DA ANAC AGORA PROÍBE ____ EM AERONAVES."},
    {id:193, dinamica: false, pergunta:"_____ É PROVAVELMENTE  UMA HORCRUX."},
    {id:194, dinamica: false, pergunta:"QUAL A COISA FAVORITA DO SILVIO SANTOS?"},
    {id:195, dinamica: false, pergunta:"É UMA PENA QUE AS CRIANÇAS HOJE EM DIA ESTEJAM TODAS ENVOLVIDAS EM ____."},
    {id:196, dinamica: false, pergunta:"PESSOAS BRANCAS GOSTAM DE _____."},
    {id:197, dinamica: false, pergunta:"HISTORIADORES ENCONTRAM DEZENAS DE CADERNOS DE PICASSO COM ESBOÇOS DE ____."},
    {id:198, dinamica: false, pergunta:"EM 1000 ANOS, QUANDO O DINHEIRO DE PAPEL FOR APENAS UMA LEMBRANÇA DISTANTE, ____ SERÁ A NOSSA MOEDA."},
    {id:199, dinamica: false, pergunta:"O QUE EU IREI TRAZER DE VOLTA NO TEMPO PARA CONVENCER AS PESSOAS QUE EU SOU UM MAGO PODEROSO?"},
    {id:200, dinamica: false, pergunta:"O QUE VOCÊ ESPERA NÃO ACHAR EM SEU PRATO DE COMIDA CHINESA?"},
    {id:201, dinamica: false, pergunta:"CBF PROÍBE ____ POR PROPORCIONAR VANTAGEM DESLEAL AOS JOGADORES."},
    {id:202, dinamica: false, pergunta:"BEBO PRA ESQUECER ____."},
    {id:203, dinamica: false, pergunta:"QUAL É O PRAZER PROIBIDO DO BATMAN?"},
    {id:204, dinamica: false, pergunta:"____. TÔ DENTRO!"},
    {id:205, dinamica: false, pergunta:"DESCULPE, PROFESSORA, MAS É QUE EU NÃO PUDE TERMINAR O DEVER DE CASA POR CAUSA DE ____."},
    {id:206, dinamica: false, pergunta:"EM UM MUNDO DEVASTADO PELO CAOS, NOSSO ÚNICO CONFORTO É _____."},
    {id:207, dinamica: false, pergunta:"____. AS MINA PIRA, VÉI."},
    {id:208, dinamica: false, pergunta:"O QUE EU TROUXE DO PARAGUAI?"},
    {id:209, dinamica: false, pergunta:"JÁ DIZIA O GRANDE PROFETA: UMA VIDA SEM _____ É UMA VIDA NÃO VIVIDA."},
    {id:210, dinamica: false, pergunta:"____? TEM UM APP PRA ISSO."},
    {id:211, dinamica: false, pergunta:"EU NUNCA REALMENTE ENTENDI _____ ATÉ EU ENCONTRAR."},
    {id:212, dinamica: false, pergunta:"____. APOSTO QUE UM SÓ NÃO TE SATISFAZ!"},
    {id:213, dinamica: false, pergunta:"_____: BOM ATÉ A ÚLTIMA GOTA!"},
    {id:214, dinamica: false, pergunta:"QUAL É MEU ANTI-DROGA?"},
    {id:215, dinamica: false, pergunta:"O QUE TROUXE A ORGIA À UMA PARADA BRUSCA?"},
    {id:216, dinamica: false, pergunta:"ENQUANTO OS EUA E A URSS COMPETIAM NA CORRIDA ESPACIAL, O GOVERNO BRASILEIRO INVESTIA PESADO EM ____."},
    {id:217, dinamica: false, pergunta:"PAPAI NOEL, EU FUI UM BOM MENINO ESTE ANO, E GOSTARIA DE GANHAR _____."},
    {id:218, dinamica: false, pergunta:"NO NOVO FILME DA DISNEY, HANNAH MONTANA ENFRENTA ____ PELA PRIMEIRA VEZ."},
    {id:219, dinamica: false, pergunta:"_____. E É ASSIM QUE EU QUERO MORRER."},
    {id:220, dinamica: false, pergunta:"QUAL É MEU PODER SECRETO?"},
    {id:221, dinamica: false, pergunta:"EU GOSTARIA DE NÃO TER PERDIDO O MANUAL DE INSTRUÇÕES PARA _____."},
    {id:222, dinamica: false, pergunta:"ERA TANTA LARICA QUE TENTOU COMER ____."},
    {id:223, dinamica: false, pergunta:"QUAL É A DIETA DO MOMENTO?"},
    {id:224, dinamica: false, pergunta:"MAS ANTES DE MATÁ-LO, SR. BOND, EU DEVO LHE MOSTRAR _____."},
    {id:225, dinamica: false, pergunta:"O QUE VIN DIESEL TEVE NO JANTAR?"},
    {id:226, dinamica: false, pergunta:"ME DESCULPE POLICIAL, EU NÃO VI O SINAL VERMELHO, EU ESTAVA MUITO OCUPADO COM _____."},
    {id:227, dinamica: false, pergunta:"QUANDO O FARAÓ PERMANECEU IMÓVEL, MOISÉS INVOCOU DOS CÉUS A PRAGA DOS ____."},
    {id:228, dinamica: false, pergunta:"EU COLOCO ____ EM TUDO. INCLUSIVE NO CAFÉ."},
    {id:229, dinamica: false, pergunta:"A ÚLTIMA COISA QUE EU ESPERAVA ENCONTRAR NA MINHA CAMA ERA ____."},
    {id:230, dinamica: false, pergunta:"O QUE EU LEVO COMIGO PARA UM DESERTO INÓSPITO? ____."},
];

module.exports = perguntas;