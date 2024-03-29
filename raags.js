var raag_scales = {
    abhogi_kanada: "S R g m D",
    adana: "S R g m P d n",
    aheer_bhairav: "S r G m P D n",
    alhaiya_bilawal: "S R G m P D n N",
    bageshree: "S R g m P D n",
    bahar: "S R g m P D n N",
    bairagi: "S r m P n",
    bairagi_todi: "S r g P n",
    basant: "S r G m M P d N",
    basant_bahar: "S r R g G m M P d D n N",
    basant_mukhari: "S r G m P d n",
    bhairav: "S r G m P d N",
    bhairavi: "S r g m P d n",
    bhatiyar: "S r G m M P D N",
    bheem: "S R G m P D n",
    bheempalasi: "S R g m P D n",
    bhoop: "S R G P D",
    bhupal_todi: "S r g P d",
    bihag: "S R G m M P D N",
    bihagda: "S R G m P D n N",
    bilaskhani_todi: "S r g m P d n",
    chandrakauns: "S g m d N",
    charukeshi: "S R G m P d n",
    chhayanat: "S R G m M P D n N",
    darbari_kanada: "S R g m P d n",
    des: "S R G m P D n N",
    deshkar: "S R G P D",
    desi: "S R g m P D n",
    dev_gandhar: "S R g G m P d n",
    devgiri_bilawal: "S R G m P D n N",
    devshree: "S R M P n",
    dhanashree_bhairavi_ang: "S r g m P d n",
    dhani: "S g m P n",
    durga: "S R m P D",
    gaud_malhar: "S R G m P D n N",
    gaud_sarang: "S R G m M P D N",
    gauri_bhairav_ang: "S r G m P d N",
    gopika_basant: "S g m P d n",
    gorakh_kalyan: "S R m D n",
    gunkali: "S r m P d",
    gurjari_todi: "S r g M d N",
    hameer: "S R G m M P D N",
    hamsadhwani: "S R G P N",
    hamsakinkini: "S R g G m P D n N",
    harikauns: "S g M D n",
    hemant: "S R G m P D N",
    hemshri: "S g m P n N",
    hindol: "S G M D N",
    jaijaivanti: "S R g G m P D n N",
    jaldhar_kedar: "S R m P D",
    jaunpuri: "S R g m P d n",
    jayat: "S r G P D",
    jhinjhoti: "S R G m P D n",
    jog: "S g G m P n ",
    jogeshwari: "S g G m D n",
    pancham_jogeshwari: "S g G m P D n",
    jogiya: "S r m P d N",
    jogkauns: "S g G m P d n N",    
    kafi: "S R g m P D n",
    kalavati: "S G P D n",
    kamod: "S R G m M P D N",
    kaushik_dhwani: "S G m D N",
    kausi_kanada: "S R g m P d n",
    kedar: "S R G m M P D N",
    keervani: "S R g m P d N",
    khamaj: "S R G m P D n N",
    khambavati: "S R G m P D n",
    komal_rishabh_asavari: "S r g m P d n",
    lalit: "S r G m M d N",
    lanka_dahan_sarang: "S R g m P D n N",
    madhukauns: "S g M P n",
    madhmad_sarang: "S R m P n",
    madhuvanti: "S R g M P D N",
    malgunji: "S R g G m P D n N",
    miyan_malhar: "S R g m P D n N",
    malkauns: "S g m d n",
    maand: "S R g G m P d D N",
    maru_bihag: "S R G m M P D N",
    marwa: "S r G M D N",
    megh_malhar: "S R m P n",
    mohankauns: "S g G m d n",
    multani: "S r g M P d N",
    nand: "S R G m M P D N",
    narayani: "S R m P D n",
    nayaki_kanada: "S R g m P n",    
    nat_bhairav: "S R G m P d N",
    parameshwari: "S r g m D n",  
    patdeep: "S R g m P D N",
    pilu: "S R g G m P d D n N",
    puriya: "S r G M D N",
    puriya_dhanashri: "S r G M P d N",
    puriya_kalyan: "S r G M P D N",
    poorvi: "S r G m M P d N",
    rageshree: "S R G m D n",
    ramdasi_malhar: "S R g G m P D n N",
    ramkali: "S r G m M P d n N",
    saalag_varali: "S r g P D n",
    sarang: "S R m P n N",
    saraswati: "S R M P D n",
    saraswati_kedar: "S R G m M P D n N",
    shahana_kanada: "S R g m P D n",
    shankara: "S R G m P D N",
    shivaranjani: "S R g P D",
    shobhavari: "S R m P d",
    shree: "S r G M P d N",
    shuddha_kalyan: "S R G M P D N",
    shuddha_sarang: "S R m M P D N",
    shyam_kalyan: "S R G m M P D N",
    sindhura: "S R g m P D n",
    sohani: "S r G M D N",
    suha_sughrai: "S R g m P n",
    sundarkali: "S r G P n",
    sundarkauns: "S g m D n",
    surdasi_malhar: "S R m P D n N",
    tilak_kamod: "S R G m P D n N",
    tilang: "S R G m P n N",
    tilang_bahar: "S R g G m P D n N",
    todi: "S r g M P d N",
    vachaspati: "S R G M P D n",
    vibhas: "S r G P d",
    yaman: "S R G M P D N",
};

var raag_phrases = {
    vibhas: `P d d P ; G P G r S ; S r G P d S' ; S' d P G r S ; P d P G P ; S G P G P ; S' d P G P;`,

    todi: `,N S r g ; M r g ; r S; S r g M P d N S' ; S' N d P M g r S; S r r S ; r r g r S ; ,d ,d ,N ,N S ; r r g r S ; S r g M P ; P M d P ; M d N ; M d N S' ; S' r' g' r' g' r' S' ; S' N d ; N d P ; M d N d M g r S ;`,


    tilang_bahar: `m P m g ; m ; n P m ; P N S' ; g m P m g m R S; S R S m ; G m P n P ; m D N S' ;S' n P m g m R S; G m ; G m P m ; G m R S ; m D N S' ; D N S' R' S' ; S' n P m G ; m P m ; D N S' n P G m R S ;`,
    
    tilang: `G m P n P m G ; n P G m G ; S G m P N S' ; S' n P m G S; ,N S ; ,P ,n ,P ; ,P ,n ,P S ; ,N S ; ,P ,N S G ; G m P n ; m P N N S' ; P N S' ; P N S' G' R' S' ; P N S' G' G' m' m' P' G' S' ; N S' S' n P ; m ; P m G m ; G S ,N S;`,

    tilak_kamod: `,P ,N S R G S ; R P m G ; S R G S ,N ; S R m P S’ ; S’ R’ G’ S’ ; S’ P D m G ; S R m G ; S R G S ,N ; ,P ,N S R G S ; S R m P N S’ ; S’ P D m G ; S R G S ,N ; ,P ,N S R G S ;  ,P ,N S R G S ,N ; S R P m G ; S R G S ,N ; S’ P ; D m G ; S R G S ,N ; S R m P D ; m P S’ ; S’ P D m G ; S’ P n D m G ;  P n D P ; D m G ; S R G S ,n ;`, 

    surdasi_malhar: `m R ,N S ; S' ; n D m P n D P ; m R P m D P ; m R ,N S ; S R m P N S' ; S' n D P ; m D P ; n D P m R ; ,N S; m R ,N S ; S' ; n D m P n D P ; m R ; (m)R (m)R P ; m D P (m)R S ; R m P n D P ; m P n N S' ; S' n D P m D P ; n D P ; m R ,N S ;`,

    sundarkauns: `,n ,n ,D ; ,D ,n S ; g m g S ; g m D ; n D ; m D n S'; S' D n D m g S; S g m D n S' ; S' n D m g m g S ,n S; S ,n ,n ,D ,n S ; g m g S ,n ; S ; g m D ; D n D; m g m g S ; g S ,n S ,D ,n ,D ; ,m ,D ,n S ; g m g S ; g m n D ; m D n S' ; m D S' ; n n D ; n D m ; D g m g ; m g S;`,

    sundarkali: `S r G P n P ; G P n ; P G r S ; r S ,n S r S; S r G P n S' ; S' n P G ; P G r S ; S r G P ; P G P G r S ; G P n P ; P n S' ; S' r' S' n P G P ; G P n P G r S ; ,n S r S ;`,

    suha_sughrai: `P n m P S' ; n n P m R S R (m)g ; g m R S ; n S ; (m)g (m)g m ; P n P ; P n m P S'; (Suha) ,n S R m P ; P n P n S' ; S' P n P m P (m)g m R S ; S' n P m R S R (m)g m R S ;`,
    
    sohani: `M D N S' r' S' ; N D N D ; S' r' S' r' N S' N D G M G ; S G M D N S' ; S' N D N D M G r S ; S ,N S G ; G M D N D G M G ; G M D N S' ; S' N r' S' r' N S ; S' r' S' r' N S' N D N D ; N D G M G ; G M D G M G r S ; S G M D N S' ;`,

    sindhura: `R m P D ; n D P S' ; R' g' R' S' ; n D P m g R ; m g R S; S R m P D S' ; S' n D P m g R m g R S; S R m P ; D P m P D P m g R ; m g R S ; g R m P D S' ; S' R' S' ; S' n D P ; m P D P m g R ; m g R S ; m P n n S' ; g' R' n D S' ; m P D S' R' g' R' S' ; n D P m g R ; m g R S;`,

    shyam_kalyan: `S R ,N S (m)R ; R M M P ; P G m R ; M P ; G m P ; G m R ; ,N S R S; ,N S R M P N S' ; S' N D P M P D P G m P G m R S ,N S; S ,N S R M P ; M P D P ; M P N S' ; S' R' S' N D P ; M P D P ; G m R ; ,N S R S ; P D P P S' S' R' S' ; S' R' S' D P M P ; R M P N S' ; N S' D D P ; S' N D P ; M P G m P ; G m R ; R ,N S;`,

    shuddha_sarang: `,N S R M M P ; M P M m R ; R ,N ,N S ; ,N ,D S ,N R S ; ,N S R M P N S' ; S' N D P M P M m R S ,N S; 
,N S R ; R m R ; S ,N (,D),P ; ,N ,D S ,N R S ; ,N S R m R ; M P ; P R m R ; S ,N S R S ; ,N S R m R M P ; R M P N (D)P ; P N S' R' S' ; S' R' S' N D S' N (D)P ; M P ; M m R ; m R S ,N S R S ;`,
    
    shuddha_kalyan: `G R G ; R S ; ,N ,D ,P ; G R S ; G R G ; P R S ; S R G P D S' ; S' N D P M G R S ; G R G P R S; S ; ,N ,D ; ,N ,D ,P ; ,P ,D S ; S ; G R S ; ,D ,P G ; R G ; S R ; S ,N ,D S ; G R G P R S ; S R G P M G ; R G P D P ; S' D S' ; S' N D ; P M G ; R G R S ; G R G P R S ;`,

    shree: `S ,N r ; r r P ; M P d M G r G r S ; M P N S' r' ; r' N d P ; M d M G r ; G r S ; S r M P N S' ; S' r' N d P M P d M G r S; S ,N r M P ; P r r P ; M P d M G r ; r P r G r S ; M P N ; N S' ; M P N S' r' ; r' S' r' N d P ; P M P d M G r ; G r P r G r S ;`,

    shobhavari: `R m P ; d P m R m ; P d P m R S ; S R m P d S' ; S' d P m R S ; ,d S ; S R m ; R m P ; m P d ; P d m ; R m P d S' ; d S' R' S' d ; S' d P d m ; d P m P ; m P d d P ; P d m ; P m R m ; R S R ,d S ; R m d P m R S ;`,


    shivaranjani: `R g P ; D P g R ; g S R ,D S ; S R g P D S' ; S' D P g R S; R ,D S ; S R g P ; D P g R ; g S R ,D S ; R g P D P D S' ; D S' D P g R ; P D P g R ; g R g S R ,D S ;`,

    shankara: `G P N D S' N ; D P G P ; R G R S ; S G P N D S' ; S' N P G ; P D P G ; P R G R S; ,N ,N ,N S ; ,P ,N ,P S ; ,P ,N ,D S ; ,N ,N S ; ,P ,N S G ; G P G ; S G P G ; P D P P G ; P G ; G R S ; ,N S G G P ; P N D S' N ; N P ; G P N N S' ; S' R' S' N ; N D S' N P G ; P G R S;`,

    shahana_kanada: `P m g m D ; D n P ; S' D n P ; D m P g m R S; ,n S ; R g m P ; m g m ; D n P ; m P D n S' ; S' D n P ; m P g m R S ; ,n S R g m ; m P m g m D ; D n P ; g m P D n S'; S' n D n P ; D m P S' ; n S' R' S'; S' n D n P ; m P g g m ; R S;`,
    
    saraswati_kedar: `R M P D P ; M P m R S ; M P D n D P D S'; S' n D P M m R ; S ,n ,D S; S R M P D S' ; S' n D P ; M P D P ; M m R S; S R M M M P ; P D P n n ; D P D P M P m ; S R M P ; D S' n D P ; D M P ; D P m ; m S R R S M P D P S' ; M P D N S' ; D n D P ; D P M P m ; S R M P ; M P R M P D S' ; D n D P ; D S' R' S' ; n ; n D P ; P D P m ; M S' R' S' ; D S' R' S' ; n D P M ; P m S R R S`,

    saraswati: `R M P D n D ; P M D P ; M R M P ; D S' n D; S R M P D S' ; S' n D P M P M R S ,n ,D S; R R M M P ; R M P D n D ; P ; D S' R' ; n n D P ; D P M P ; M R ; R M P ; M n D P ; M P M R ; S R ,n ,D S ; S R M P R M P ; D S' n D ; M P (M)R ; S R ,n ,D S;`,

    sarang: `R m ; P R ; m R ,N S ; m P n P m R ,N S ; S R m P N S' ; S' n P m R S ,N S; ,N S R ; R m R ; S ,N S ; S R m P ; P R ; m R n P ; m P N N S' ; S' n P n P ; m R ; P m R ; ,N S ; ,N S R S ;`,

    saalag_varali: `g P D n D P ; D n D S' ; S' n D P ; D n D P ; r g r S ; S r g P D n S' ; S' n D P g r S ; S ,n ,D ,D ,n S ; S r g r S ; ,n S r g P ; P g ; P r g ; g r S ,n ,D ; ,D S ,n r ,n ,D S ; r g P ; P D ; D n D P; g P D n D ; S' n D P ; D n D S' ; P D n D S' ; n S' r' S' ; S' n D P ; D P g r ; g P r g r S;`,

    ramkali: `S r G m P d N S' ; S' N d P ; M P d n d P ; M P G m r S ; S r G m ; m G m r S ; ,N S G m P ; M P G m r S ; G m d N S' ; P d N S' ; S r' S' ; r' r' S' N S' ; N d P ; M P d n d P ; M P d M P ; G m r S ;`,

    rageshree: `,n ,D ,n S ; G m R S ; G m D n D m ; G m R S; S G m D n S' ; S' n D m G m R S; S ,n ,D ,n S ; G m R ,n S ; G m D m ; D G m ; G m D n S' ; S' R' S' S' n D ; n D G m ; m G m R S ; D n S' ; D n S' R' S' n D ; m G R S ,n ,D ; ,D ,n S G m R S ;`,

    poorvi: `S r G ; M G m G ; M d P ; N d P ; G M P ; M G m G r S ; S r G M P d N S' ; S' N d P ; M G m G r S ; S ,N ,d ,N r S ; S ,N S r G ; r m G ; G M P ; P M G m G ; r G M P ; d M P M G m (r)G ; G M d N S' ; S' N r' N d P ; d M P G m (r)G ; r S ,N S r G ; r S ;`,

    puriya_kalyan: `,N r G M P M r G r S; M D P; M D N S';   S r G M P D N S'; S' N D P M G r G r S;  ,N r G; G M M G; M D P; M D N D P; P M D P M G; M r G; r S; M D M N; N D M D P; D N S' N D P; G M D N S' N; D N D S'; N S'; D N r' S'; N r' G'; G' M' G'; G' r' S'; N D N D P; P M D P; M N D M G; M P M G; P D M P M G G r r S; ,N ,D ,M ,D; ,N r S;`,
    
    puriya_dhanashri: `,N r G M P ; P M G M r G ; M d P ; M d N S'; N r' ; N d P ; P d P P M G M r G ; r S; ,N r S ; ,N r G M P ; M d N S' ; S' N d P M G M r G r S; ,N r G ; G M G ; M P d P d M P ; M G M r G ; G r M G r S ; ,N r S ,N r G ; G M M G r G r G M P ; M G M r ; r G ; r G M P d P d M P ; P d P M G ; M r G ; ,N r M G r G ; r S ; ,d ,N r G ; M d N S' ; S' N r' S' ; r' N d P ; P d P M d P ; d P M G M r G r S ; P d P M G M d N S' ; N r' S' ; d N r' G' G' r' S' ; N r' N d ; P d P M ; G M r G ; r G M P d P M ; G M r G r S `,

    puriya: `N r G ; G M D G M G ; N M G ; G M G r S ; ,N ,M ,D S ; ,N r G r S ; ,N r G M D N S' ; S' N D M ; G M D ; G M G r S; ,N r G ; G r ,N ,D ,N ; ,N ,M ,D S ; G M D N ; N M G ; G M D G M G ; r S ; G M D N D S' ; N r' N M G ; G M D G M G r S;`, 


    pilu: `G m P N S' ; n D P ; m P N d P ; m g R S ; P g R S ,N ; S g R S ; S G m P N S' ; S' n D P m g R S ; ,N S g R S ; S; g R S ,N ; ,m ,P ,N S g R S ; S ,N ,d ,P ; ,P ,N S g ; g m P (m)g ; g (R)S ,N ; S ; S G ; G m g (R)S ; S G m P ; n D P ; G m D P g R S ,N ; S ,N S R ; S ,N ,D ,P ; ,m ,P ,N ,N S ;`,

    parameshwari: `S r g m D m ; g m D m g r ; g r ,n ,D ; ,D ,n r S ; S r g m D n S' ; S' n D m g r S; S r g m ; g m D m ; m D n S' ; D n r' S' ; S' n D m ; m g r; g r ,n ,D ; ,D ,n r S ;`,

    nayaki_kanada: `R ,n S R P (m)g ; g m P m R S R S ; g m n P ; n m P (m)g m P m R S R R S; m P n P S'; P n P; g m R S;
 S R (m)g m P n P S' ; S' n P n P m P (m)g g m R S ; R P ; m n P ; S R ,n S R P g m ; g m P m R S R S ; S R R g m ; m n P ; m P n P m P S' ; m P n S' ; S' n P n P ; n n P m P n n P m P ; g m P m R S R S ;`,

    narayani: `S R ,n ,D ,P ; ,m ,P ,D S ; m R ; m R S ; S R P ; m P n D D P ; D P m R S ; S R m P D S' ; S' n D P m R S; S R P ; m P ; m P D n D S' ; m P D S' ; S' R' n D S' ; S' R' m' R' S' ; S' n D D P ; m P D P m R ; m R ,n ,D S ;`,

    nand: `S G m D P R S ; G m P D N ; P D (P) m m P ; G m D P R S ; S G m D P R S ; G m P N S' ; S' D N P ; D M P G ; G m D P R S ; S G m D P R S ; G m P D N ; (D)P ; P D (P) m m P ; G m D P R S ; P N R' N D P ; P D M P ; G m (D)P R S ; G m P D N P ; P D P M D P G m D P R S;`,
    
    multani: `,N S ; M g ; M g P ; M g M g r S ; ,N S g M P N S' ; S' N d P M g r S ; S; ,N S M g ; (M)g (S)r S ; ,N S (M)g M P ; M P (M)g ; M g (S)r S ; g M P ; M P g ; M g P ; M d P ; P M g ; g M P N ; N d P ; g M P N S' ; S' g' (S')r' (N)S' ; N S' N d P ; P d M P ; g M g M g (S)r S ;`,

    mohankauns: `S G m g S ; ,n ,d ; ,n S ; S m G ; m d n d m G ; m G g S; S G m d n S' ; S' n d m g S; S ,n ,d ; ,d ,n S ; S G G m ; G m g S ; G m d m ; d n S' ; S' g' S' n d m G ; m n d m G ; m d G ; m g S ;`,

    megh_malhar: `,n S R P m R ; m P m R ; m P ; P m n P m R ; R R P m R R S ,n S; S (m)R m P ,n S ; S' n P m R S; R ,n S ; S ,n ; ,n ,n ,P ; ,P ,n S ; ,P ,n ,P S ; ,P ,n S (m)R ; ,n S (m)R ; (m)R (m)R P ; (m)R m m (m)R ; (m)R S ; ,n ,P ,n S ; ,n S (m)R m P n P ; m P S' ; P n S' ; P n P S' ; P n S' R' ; R' R' S' ; S' R' S' S' R' S'; n P ; m P n P (m)R S ; ,n S ; (m)R P m R ; R m P n n P ; n n P m R ; R P m n P ; n S' ; n P m R ; ,n R S ;`,

    marwa: `S ; ,N ,D S ,N r ; r G M D ; D M G r ; ,N ,D r S ; S ,D ,N r G M D N S' ; S' N D M G r S ; ,N ,D S ,N r S  ;N ,D ,N r ; G M D ; M G r ; ,N ,D r S ; M D ; M D S' ; S' D N r' N D ; M D ; M G r ; G r ,N ,D r S ;`,


    maru_bihag: `M G ; M G R S ; S ,N S ; m G P ; M G M G R S ; S G M P N S' ; S' N D P M G M G R S; ,N S G M G R S ; G M P N ; N S' ; S' N D P N S' D P ; M G M G R S ; S m m G ; P D P M ; G M G R S ;`,

    maand: `G m P D S' N D; D P m; m P G R G S; G m P; P D S' N D; D d D P m m P m m G g G; D d D S'; S' N D P G m P; S R G S; S R m; m P; m P m m G; S R G S R S ,N ,D; ,D ,P ,N ,D ,P ,m; ,P ,D ,N ,P ,D S; S R m; m P G m P D N; P N D; m; G m P D N; P D S'; S' R' S' R' S' S' N D; D N S' N D P D; m P G; S R G S`,

    malkauns: `,d ,n S g m; g m n d m; d n S'; g’ S’ n d; S g m d n S' ; S' n d m g S; g g m ; ,d ,n S m ; g m g ; g m g S ; m m ; d d n n d m ; g g m g S ; ,n ,n S g ; S g m d m ; m d n d m ; g m d n; m d n ; n S' ; n n S' ; g' m' g' S' ; n S' d n d m ; g m g n ; n d ; d m g g m ; g S`,


    miyan_malhar: `S R; R P; g g m R S; ,n ,D ,N ,N S; ,N S; m R P ; g m R S; m R P n D N S' ; S' n D n P; m P g g m R S;`,

    malgunji: `G m g R S ; ,n S ; ,D ,n S R G m ; S R G m D n S' ; S' n D P m G R G m g R S ; S ,D ,n S R G m ; m D n S' ; S' n D P m G m ; m g R S ; S ,n ,D ,n S R G m ; m D N S' ; S' R' S' R' n S' ; R' R' S' n D P ; n n D P m G R G m ; m g R S ;`,

    madhuvanti: `,N S M g M P; M g S R S; ,N S g M P N S' ; S' N D P M g M g R S ,N S; ,N S M ; M g R S ; N D P ; P D P ; M g ; M g R S; g M P N S' ; N S' D D P ; D P M g M g ; M g R S ; R ,N S ;`,

    madhmad_sarang: `,n S R ; m R ; P m R ; n P m R ; P m R S ; ,n S; R m P n S' ; S' n P m R S ; ,n S R m P ; R m R ; n P m R ; m R S R ,n S ; R m P; n P m R; ,n S R S; m P n S' ; S' n P m P; P R m R ; n P m R S ;`,

    madhukauns: `S g M ; P M g M P ; M P n S' ; S' n P M ; g M g S; S g M P n S' ; S' n P M g S; S g S ; g M g S ; S g M P ; M P g M g ; g M P n P ; n M P ; P M g M g S ; g M P n S' ; n g' S' ; g' n S' ; S' n P M ; P M g M P n P ; n M P g M g ; M g S ;`,

    lanka_dahan_sarang: `m P S' ; n P ; m P ; R g R S ; ,n ,P ,m ,P ,N S; S R m P N S' - S' n D P ; m P D P ; g R g R S ,N S; S R m P N S' ; S' n D P ; m P D P ; g R g R S ,N S; S ,N S ; ,N S R S ; R S ,n ,P ; ,m ,P ,n ,P S ; ,N S R ; ,N S R R P ; m m P ; R m P D P ; m P m n P ; S' D n P ; m P g R g R S ; ,n ,P ,m ,P ,N S ; R R m m P ; n P m P S' ; n P ; m P g R g R S ; ,N S R g R S ; R ,N S ; S R m P R g R S ; R m g R ; R D P ; P D P n D P ; R g R S ; ,n ,D ,P R S ;`,

    lalit: `,N r G m M m G r S ; G M d N d M m; r' N d M m; G m M m; G; M G r S; ,N r G M d N S' ; S' N d; M d M m; G M G r S`,

    komal_rishabh_asavari: `m P d S' ; r' n d m g r ; g r S;  S r m P d S' ; S' r' n d m P d m g r g r ,n ,d r S;  S r ,n ,d ; ,P ,d ,n ,d ; ,m ,P ,d ,d S ; r r g r g r ,n ,d S ; r m m P ; m P d m ; P d n d m ; m g r ; g r ,n ,d S ; m P d S' ; S' r' r' S' ; S' r' g' r' g' r' n d d m P ; m P d S' ; P d n d m ; P d m g r ; g r ,n ,d S ;`,

    khambavati: `S R m G m S ; R m P D ; n n D P D P ; m P D S' ; P D S' R' G' S'; R' n D S' ; D m P ; G m S ; R ,n ,D S; S R m P D S' ; S' n D P D ; m P ; G m S ; R ,n ,D S; R R m m P ; m P D n n D ; m P D S' ; D S' R' n n D ; P D m P ; m G m S ; S R ,n ,n ,D ; ,D S R m G S ; D m ; P G ; m S ; R ,n ,D S ; G R G S ;`,

    khamaj: `G m P D; G m G; P S' N S'; n D P; m P m G; R S; S G m P D N S' ; S' n D P m G R G S ,N S G m P; ,N S G m P; P D; m P m G; G m P D N S'; N S' P; P D P S'; S' n D P; D P m P D P m G m; P m G R; G S; S G m P; G m P D; P n D P; P D P n D P m G; m P G m G R G S; S' R' S' S' n D P; m P m m G R G S; ,n ,D S;`,

    kausi_kanada: `g m d P ; m g R ; g m S ; g m P m g R ; g S ,d ,n R S; ,n S g m d n S' ; S' n d P m g R g m R S; ,n ,n S ; ,d ,n ,n ,d ; ,n S R R S ; ,n S R S ,d ,d ,n S g ; S g m ; m P ; m g m ; R S ; g ; m P m g m ; n d P m ; m d n S' ; n d n d ; P m g m ; m P g g m R S ; S' n d n ; d P ; P m ; P m g m P ; g P m ; g m g S ; ,d ,n R S;`,


    kaushik_dhwani: `G m D N D S' ; N S' D ; G m ; D m G S ; S G m D N S' ; S' N D m G S; S ,D ,N S G m ; G m D ; G m ; G S ; G m N D m ; D N S' ; S' G' S' ; G' S' N D ; D N S' D m ; m D G m ; G S ;`,


    kamod: `S (m)R R P ; G m P G m R S ; S' R' S' ; D D P ; m R P ; D M P ; G m R S; S R P ; G m R S ; m R P ; D N S' ;S' N D P ; M P D P ; G m P ; G m R S; S m R P ; R R P G m P G m R S ; M P D P ; G m D D P ; G m P G m R S ; P D P S' S' R' S' ; S' R' S' S' D D P ; M P D M P ; G m P G m R S ;`,


    jogkauns: `G m ; G m P m ; G m d N S' ; S' N d ; P d n d m P m ; G m (S)g S ;S G m d N S' - S' N d P m ; P d n d P m ; G m (S)g S ;S G m (S)g S ; S G m P m ; G m N d ; d N S' ; S' g' S' N d ; P d n d P m ; m P m G m g S ; m d N S' ; g' S' N d ; d n d P m ; G m P m G m (S)g S ;`,

    jogiya: `r m m ; m P d ; P d N d P ; P d m r S; S r m P d S' ; S' N d P ; m m r S ; S r S ,d S ; S r m ; m P ; P m r S ; r S ,d S ; r m P ; m P d S' ; S' (N)d P ; m P d (n)d m ; m r S ; ,d S ;`,

    pancham_jogeshwari: `S G m g S ; ,n ,D ; ,m ,D ,n S ; S G m ; m P m g S ; n D m ; D n S' ; S' D ; n D ; D m ; P m g S ; S G m D n S' ; S' n D m G m P m g S; ,D ,n ,D ,n S ; S ,n g S ; S G G m ; m G m g S ; S G m P m ; m G m D ; G m m D ; D m D G m ; m G (P) m g S ; S G m D n D n S' ; S' g' S' n D ; S' n D m ; n D m G ; D m G m ; (P) m g S ;`,


    jogeshwari: `S G m g S ; ,n ,D ; ,m ,D ,n S ; S G m ; n D m ; D n S' ; S' D ; n m ; D G ; m g S ; S G m D n S' ; S' n D m G m g S; ,D ,n ,D ,n S ,n g S ; S G G m ; m G m g S ; G m m D ; D m D G m ; m D n S' ; S' g' S' n D ; S' n D m ; n D m G ; D m G m g S ;`,


    jhinjhoti: `,D S R m G ; R G S R ,n ,D ,P ,D S ; ,P ,D S R G m G ; m G R S ; R ,n ,D S ; S R m P D S' ; S' n D P m G R G S; ,P ,D S R m G ; m G S R ,n ,D ; ,P ,D S ; R m P D n D ; P D m G ; R G S R ,n ,D ; S ; R m P D n D ; P D S' ; S' R' n D P ; D P m G ; m G R G S ;`,

    jayat: `P D P S'; S' P ; P D G P ; P G r S; S r G P D P S' ; S' P D P ; P D G P; P G r S; S r S ; S r G P G r S ; S G P ; P D P ; P D G P ; P G r S ; r G P ; G P G r S ; S G P ; P D G P ; P D P S' ; S' r' S' ; S' P ; P D P ; P D G P ; P G r S ;`,

    jaunpuri: `R m P d m P S' ; R' n d P ; m P n d P ; d m P g R m P ; S R m P d n S' ; S' n d P m g R S; S ,n ,n S ; R R S ; R R m m P ; P P ; P d d P ; d P d m P ; R R m m P ; m P n d P ; m P d n S' ; R m P d m P S'; S' R' R' S' ; R' R' n n S'; R' n S R' n d P ; d m P g R S R m P; d m P S';`,

    jaldhar_kedar: `S R S m ; m R P m ; m P D S' ; R' S' D P m ; P m R S ; S R S ; S R S S m ; m R R P m ; P D P m ; m R P m ; R S ; S ,D ,P ; ,m ,P ,D S R m ; S R S R P P m ; m P D S' ; S' R' S' ; R' S' D P m ; m P m R S ;`,
    
    hindol: `D D N M D S' ; D M G ; S ,D ,D S; S G M D N M D S' ; S' N D M G M G S ,D S; G M D G M G ; M G ; G S ; ,D ,D S ; ,N ,M ,D S ; S G M D ; G M G ; M D S' ; N M D ; G M M G ; S ; ,D ,D S;`,

    hemshri: `,N S g m P ; m g S g ,N S ; g m P S' ; n P ; m ; P m g m P ; g P m g S g ,N S; ,N S g m P N S' ; S' n P m g m g S ,N ,N S; S g m P m ; g m P n P N N S' ; N S' g' N S' ; P N S' n P ; n P m g m ; g m P m g S ; ,N ,N S ; ,P ,N S g ,N S;`,


    hemant: `G m D N D ; m (P)m ; N D (P)m ; G m G R S ; G m D P m G R S; S G m D N S' ; S' N D P m G R S; S G m D ; P m ; G R S ; ,N ,D ; ,m ,D ,N S ; m (P)m ; G m D N ; m D N S' ; S' R' S' N D ; N S' D P m ; m P m m G m G R S ;`,

    harikauns: `S ,D ,n S ; g M g S ; g M D n S' ; S' n D M g S ; g M g S ,n S ,D ,n g S; S g M D n S' ; S' n D M g S ; S ,n ,D ; ,n S ; ,D ,n S g S ; g ,n S g M g ; M D n D M g S ; g M D n S' ; S' g' S' n D ; n D M ; D M g ; M g S ;`,

    hamsakinkini: `G m D P ; m P g R S ; ,N S G m P P ; m P ; m n D P ; D P m P ; G m D P g R S ; ,N S G m P N S' ; S' n D P m P G m P g R S ,N S ; ,N S G m P g R ; S R ,N S ; G m P n D P G m P g R S`,

    hamsadhwani: `,N R G P G R G P N S'; S' N P G R G P G R S; S R G P N S' ;  S' N P G R S ,N ,P ,N R S ; ,N R G S ; G P G ; R P G ; N P G R ; G R G R S ; ,N ,P ,N R ,N ,P S`,


    hameer: `G m N D ; D P ; G m P G m R S; S G m D ; N D S'; S G m N D P ; G m D N S'; S' N D P M P D P G m P G m R S;  S' N D P G m R S; S R R S ; P ; G m P G m R S ; G m N D D P ; G m D N S' ; P D P P S' ; G m D N D S' ; M P D N S' ; S' R' S' ; N S' D D P ; S' N D P ; M P G m R ; P G m R S ;`,

    gurjari_todi: `S r ,N ,d S ; r g M d ; M d N d ; N d M g r ; g r S; ,N ,d ; ,M ,d ; ,M ,N ,d ; ,N ,N S ; S r ; S r g ; g r ,N ,d ; ,d ,N ,N S ; S r g M ; d M d ; M d N S' ; d N S' ; d N S' r' ; g' r' N d ; M d N S' r' ; d S' ; d S' r' N d M ; d N d M ; g M d ; M g r S;`,

    gunkali: `S r m P d ; P d m r ; r S ,d S ; m P d d S' ; d P d m ; P m r S ; S r m P d S'; S' d P m r r S ,d S; ,d ,d S ; r r S ; r m ; m m P m ; P P d m ; P m r ; r S ,d ,d S; m P d S' ; S' r' S' d P ; r' S' d P ; d m P d ; m r S ;`,


    gorakh_kalyan: `S R m ; R m R S ,n ; R m D n D S' ; S' n D m R ; m R S ,n ; ,n ,D R S; S R m D S' ; S' n D m R S ,n ; ,n ,D R S; S R m R S ,n ; ,D ,n ,D ,D S ; ,D S R ; R R m m R ; m m D ; n n D ; m D m R ; ,n ,D S ; S R m R ; m D S' ; S' R' R' S' n D ; m R (P)m R ; ,n ,D S ; S R ,n ,D S ; ,n S R m R ; R m D m ; m D n D ; m D S' ; n S' R' S' ; D n D m ; m (P)m ; R S ,n ; R ,n ,D S ;`,

    gauri_bhairav_ang: `S r S ,N S G r; m G r S r ,N S; S r ,N S; S r G m P d P; P d N S' ; S' N d P m G; r G m G r; S r ,N S; ,d ,N ,d S ,N S; S r G m G ; r G r m G r S r ,N S ; G m P d P ; P d N S' ; d N d S' N ; d P m P m d P m ; G r ; S r ,N S; G m P d P ; m P m d P m G ; m G m ; P P m G r G ; r G r m G r S ,N ; S r G m G;`,

    gaud_sarang: `S G R m G P R S ; m G P ; D P S' ; S' D P m G ; G R m G P R S ; S G R m G D P N D S' ; ,N S G R m G; P M D M P S' ; S' N D P M P D P G R m G P R S ; S' N D P M P m G ; m G R m G P R S; S G R m G P R S ; G R m G ; P N D N D P m G ; G m P N S' ; S' ; D P m G ; M P M P ; G R m G ; P D P P ; S' R' S' S' ; S' N D P m G ; R G R m G ; P R S ;`,

    gaud_malhar: `S R G m ; R G m G m ; G R G (R)S ; m P D n P ; m P D N S' ; S R G m ; R P ; m P D N S' ; S' n D n P m ; G R G (R)S ; R G m ; S R G m ; m R ; m R (m)R P ; m P D (n)P ; m P D N S' ; R' S' D n P ; D P m G P m ; P ; P N D N S' ; S' D P m ; m R (m)R ; P ; G P m ; S R G m ; G R G m ; G R G (R)S ;`,
    
    durga: `m P D ; m R ,D S ; R R P; S R m P D S' ; S' D P D m R S ,D S ;  R m P D ; P D m ; m P D D m ; D m P D S' ; D D S' S' D D m; m P D ; m R ,D S;`,

    dhani: `,n S g ; S g m P g ; n P g S ; S g m P n S' ; S' n P m g S ; S ,n ,P ; ,n S g ; g S g ,n S ; S g m g ; S g m P g ; g m n P g m g ; m P g m g S ; g m P S' n S' ; n S' g' S' ; g' n S' ; P S' P n P ; n P g m g ; g m P g S ; g ,n S g S ;`,

    dhanashree_bhairavi_ang: `S; g m P n d P ; P d m P g ; m g r S ; g m P g r S ; ,n S g m P n S' ; S' n d P m P g m g r S;  ,n S g r S; ,n S g m P ; P d m P g ; g m P g ; m g r S ; ,n S g m P ; g m P n d P ; P ; g m P n S' ; n S' r' n S' n d P ; p d m P g ; g m P g r S ; P ; g m P n S' ; P n S' g' r' S' ; g' r' S' n ; S' n d P ; P d n d ; n d m P g m ; g m P g m g r S ;`,

    devshree: `R M P ; M P n P ; M R S; ,n ,P ,n S; S R M P n S' ; S' n P M R S; S R M R ; S ,n S R S; R M P ; M P n P ; M P n M P ; R M P ; M P n n S'; n S' R' S'; R' n S' ; n P M P ; M R S R ; ,n S; ,P ,n S ;`,

    devgiri_bilawal: `,D ,N ,D S R G ; G R S ; ,D ,P G ; ,N R G m G ; G P m ; G R S ; S R G P D N S' ; S' N D P ; D n D P ; m G R S ; ,N S ; ,D ,P G R S ; G R G ; G m G R S ; ,D ,P G R S ; S ,N R G m G ; G R G P ; P D N S' ; S' N D P ; D n D P ; m G R G R S ; ,N R G R S;`,
    dev_gandhar: `,d ,n S R G m G m ; d m P n d P ; d m P g R S ; R G m ; P g R S ; d m P g R G m g R S ; S R G m P m g R G m P d n S' ; S' n d P m P g R G m g R S; R ,n ; S R G m ; g R ; G m ; m m P ; d m P ; g R G m ; n d P ; d P m P g R G m g R S R ,n ; R G m P ; m ; m P d d n n S' ; R' n d P ; d P g R ; R G m g R ; R S m P S' ; S' R' G' m' ; m' g' R' S' ; R' n ; n d P ; d P m g ; R ; G m ; m g R ; G m g R S;`,

    desi: `R m P ; D m P S' ; S' P D m P ; R g S R ,n S; S R m P n S' ; S' P D m P R g S R ,n S; S R ,n S ; ,n S R m P ; m P D m P ; R g S R ,n S ; R m P g R ; m P D P ; D m P S' ; m P n S' ; S' P D m P ; m P D m P g R ; R m g R g R S R ,n S ;`,

    deshkar: `S R G P D ; D G P ; S' D ; P D G P ; G R S ; ,D S; S R G P D S'; S' D P D G P G R S; S R G P D ; D G P ; P D G P ; S' D ; D S' R' D R' S' ; S' D D P ; P D G P ; G (R) S ; S ,D S ; S G P D P ; G (R) S;`,


    des: `D m G R; G ,N S; R m P N; S' R' n D P ; S R m P N S' ; S' n D P D m G R G ,N S ; R R m G R ; D P n D P ; R' R' m' G' R' ; G' N S' ; D m P; N N N S'`,


    darbari_kanada: `S R g g ; m P d d n P ; n m P S' ; S' d n P m P g m R S ; ,d ,n S; S R g m P d n S' ; S' d n P m P g m R S; ,n S R ; R S ; ,n S R S ; S S R R S ,n S ; (,n) ,d ; ,n ,d ,n S ; ,n ,n S ; ,n ,n R ; R g (R)g ; g m P ; (m)g m R S ; R ,n S ; (,n),d (,n),d ,n ,n S ; ,d ,n R S ; m P d (P)d n ; d n S' ; S' (n)d n P ; m P ; n n P m P ; m P ; (m)g g m R S ;`,


    chhayanat: `,P R R ; R G m P ; G m R S ; S' P R G ; m G m R S R S; S R G R ; G P m G R S ; S R G m P D N S' ; S' N D P M P D P ; R G m P m G R S; R R G ; G m P m ; G m R ; R G m P ; P D P R ; R G m P ; m G m R S ; ,P ,P S ; ,P R S ; R G m P D P R ; R R G ; G G m ; P m G m R S ; ,P S R R S ; R G m P ; P D P ; P M D P P R ; G m P S' ; R' S' ; D D P ; D P M P ; R R G ; R G m P D P ; M P M P D P ; D N D P ; R G R S ; ,P S R R S ; R G m n D P ; R R S ;`,
    
    charukeshi: `,d ,n S R G m G R ; R G m d P ; R G m R S ; S R G m P d n S' ; S' n d P m G R S ,d ,n S ; m G R ; G R S ,n ,d S ; S R G m ; R G m R S ; G m d P ; m G R ; G m P d n S' ; G m d n ; n S' ; n S' R' S' d ; d n R' S' ; n S' n d P ; P d n d m ; G R G m R S ; ,n ,d ,n R S ; m P d n S' R' ; S' R' G' R' ; G' R' n d S' ; S' n d P d m G R ; G m d P ; G m R S ,n ,d ,n R S ;`,
    chandrakauns: `S g m g S ,N ; ,N S ; g m d N S'; N d S' ; N d m g m g S ,N S; N ,d ,N S ; g m d N S' ; m d m N ; N S' g' S' N S' N ; N d ; m d N d m ; m g m g S ; m g S ,N ; S g m g S ; ,N ,N S;`,

    bilaskhani_todi: `S r ,n ,d S ; S r g ; r g P ; P d n d ; d m g r ; g r S ; S r g P d S' ; S' r' n d  P ; P d n d m g r ; r g r S ; S r g P ; d m g r ; g r g r S ; r ,n ,d S ; S r g P ; d n d P ; g P d S' ; S' r' n d ; d S' r' ; r' n S' r' g' ; g' r' n d ; P d n d m ; g r ; g r S ;`,

    bihag: `,N S G ; G m G ; P M P G m G ; P M G m G R S; S G m P N S' ; S' N D P M P G m G R S, S' N D P M G m G R S;`,
    bihagda: `S G m P ; m P G S; G m n D P ; G m G ; G m P N S' ; S' N P ; D n D P ; G m G ; m P m P G S; S G m P N S' - S' N P ; P D n D P ; G m G ; P m G S; N ,N S ; S ,N  ,P ; ,P ,N S ; ,N S G ; G m G  S ; S G ; G m P m P G S ; S G m D ; D P ; G m P m P G (R) S ; G m P D n D P ; G m G ; G m P N S' N (D) P ; D N S' N P ; D n D P ; P D G m G ; P m G (R) S ; G m n D P ; G m P S' ; N S' G' R' S' ; S' R' S' N (D) P ; n D P ; G m G ; G m P m P ; G (R) S;`,
    
    bhupal_todi: `S ,d S r g ; d P g r g r S;  S r g P d S' ; S' d P g r S ,d r S; S ,d S ; ,d r r S ; S r g r S ; r r g r ; g P r r g ; g P d P ; d S' ; d P ; P r g r S ; g r ; r g r S ;`,
    
    bheempalasi: `,n S g m P ; n D P ; S' ; n D P ; m g R S;  ,n S g m P n S' ; S' n D P m g R S ; ,n S ,P ,n S; S ,n ,n S ; ,n S g R ; S R S ,n ; ,n ,n S ; ,P ,n S g ; g m g R S ; S g m ; m g P ; P m D P m g m ; m g P m P m g m ; g m P g m ; g g R S ; ,n S m ; P m g ; g R S ; S g m P ; m g P ; P m D P ; n D P ; P m D P m ; P m ; g m P n ; S' n n n n S' ; P P S' n R' S' ; S' R' S' n n S' n D P ; P D P m g P m ; g m g R S;`, 

    
    bheem : `,n S G m P n ; P n S' ; S' D P ; D m P ; G m R ,n S ; ,n S G m P n S' ; S' n D P m G P m ; G m R S ; ,n S ,P ,n S ;,n S G m P n P n S' ; S' D P D m P ; G m R S ; R ,n S ; ,P ,n S G m R S ;`,


    bhatiyar : `S m P ; P G r S ; S D N D ; N P ; D m ; P G ; P G r S ; M D S' ; S r S ; S m ; m D P ; S D ; D N P m ; P G ; M D S' ; S' r' N D P ; D N P m ; P G r S; S m ; m P ; m D P m ; P G ; P G r S ; S D ; D N P ; D m ; D P ; G P G r S ; M D S' ; S' N r' N D P ; D N ; P D ; m ; D P G r S ; S ,N ,D S ,N r G m D P ; G P G r S ;`,
    
    bhairav : `r r S ; d d P ; G m d d P ; G m r r S ; ,N S; r r S; d d P ; m P G m P ; G P m ; G m r r S ; ,N S r S ; G m N d ; d N S' ; N S' r' r' S' ; d d P m P ; G m P ; G m P P m G m ; G m P ; G m r S ; ,d ,N S r r ; G m d m P ; P m P ; d P d N d N S' ; r' r' G' m' r' S' ; N d P ; d d P m P m G m P ; m m r r S; `,
    
    basant_mukhari : `S r G ; G m ; P m ; P d n d P m ; P m G m ; G r ; r S ; ,n ,d ,n S r ; r G m ; G r S ; G m r S; r r S ; r G ; G G m ; m G m P ; P m ; P d n ; n d P m G ; r G m P m ; n d ; r' S' ; d n d P ; P m G m ; r G m P m ; G m r r S ; ,n ,d ,n S ; r G m ; G P m G r S; S' n d P m G r S ,n S`,
    
    bairagi_todi : `,n S r g ; g r ,n ,P ; ,n r S ; S r g P n S' ; S' n P g r S; S r g ; g r S ; r g P ; r g r S ; S r g P ; n P g r ; g P n S' ; n S' r' S' ; S' n P ; n P g r ; g r S ; ,n S ,P ,n S ; r S ;`,
    
    bageshree : `,n S m ; S g m ; g R S ; ,n ,D ; m D n D ; m g R S; S R g m D n S' ; S' n D m P D m g R S; ,n S;  S R S ; ,n ,n S ; ,n ,D ; ,m ,D ,n ,D S; ,D ,n S m ; m g g R S ; ,n ,n S m ; m g ; m D n D m ; m P D m ; m g R S ; g m D S' D n D m ; D S' R' S' n D m ; m P D m ; m g R S ; g m D n D n S'; n S' n n R'; S' R' S' S'; R' S' n S' ; D n D S' ; m D ; D n D m ; m P D m ; m g R S ,n S ;`,

    alhaiya_bilawal : `G R G P ; D n D P ; m G R ; G P D N S' ;  S R G P D N S' ; S' N D P D n D P m G R S;  S R G ; G m R G P ; P m G ; R G R S ; G m R G P ; D G m G ; G P D m G ; G P D N S' ; S' R' S' ; S' N D P ; D N S' ; S' N D P ; D n D P ; D G m G R S ;`,
    
    aheer_bhairav : `G m P ; D n D ; P D P ; S' n D ; n D P m G m ; G m P m r r S ; ,n ,D ,n r r S ; S ,n ,D ,n r r S ; r G m ; G m P D P m ; G m r r S ; G m P D n ; n D n S' ; S' r' S' ; n S' n D P ; D P m G ; G m P m r r S ; ,n ,D ,n ; r r S ;`,
    
    adana : `m P d n S'; S' d n S' ; S' d n P ; m P ; g m R S;  S R m P d n S' ; S' d n P ; m P g m R S; S R m P ; d n P ; m P S' d n P ;`,

 
    abhogi_kanada : `S R ,D S ; R g m ; g m R S; S R g m D S' ; S' D m g R g m R S ; R ,D ,D S ; S R ,D ; S R g m ; g m D S' ; S' D m ; D m g R ; g m R S ; R ,D S R g m R S ;`,
    kedar : `S m ; M P D P m ; S R S ; M P D P M ; P S'; S' R' S' S' D D P;  m G P; S' S' D P ; S' R' R' S' D D P; M P S' ; M P D P M P S' ; M P D P S' ; R' S' N S' D D P ; D P M P m S R S `,
    yaman : `N R ; ,N R G ; ,N R ,N G ; R G ; ,N M G R S ; ,N R G ; M R G M P ; M D P ; M D N ; M D M N ; G M G ; N D P ; M R G ; ,N R S ; ,D ,N ,D S ; ,D ,N R G   ; ,N R G ; G R G ; ,N R ,N G ; ,N R G M R M G ; G R M G ; M P ; G M P R S   ; ,N R S ; ,N R G M P ; M P M P ; P M D P M P ; M D M N ; N D P ; M G ; G M D N  M D N ; N D P M G R  S ; ,N R S `,
    kalavati : `S G P D ; G P D ; P D P S' ; n D D ; n D P ; G P D ; G D P ; G P G S ; ,n ,D S ;`,
    jog : `G m P n P ; P n P m G m ; G m g S; S G m P ; n P m G ; G m ; m P ; m P m ; G m G g S ; G m P n S' ; P (S')n (S')n S' ; n S' g' S' ; g' S' n P m ; m P G m ; G m (S)g S ;`,
    bahar : `S m ; P m g m ; n P m ; m n D N S' ; n P m ; P m ; g m R S; g m D N S' ; N R' S' ; D N S' R' g' R’ g’ S’ R' N S' ; N S' R' R' S' N S' ; S' n D N S' ; R S ,N S m `,
    basant : `M d r' S' ; N S' r' N d P ; G M d N M G ; M d G M G ; M G M G r S ; S ,N r S ; S G M P ; M P M G M G ; M G r S ; M d N d P ; G M d N M G ; P M G M G ; M G r S ; M d r' S' ; r' N d P ; M P M G M G ; G M N M G ; P M G M G r S ; S m m G ;`,
    keervani : `P d S' ; S' N S' R' g' R' S' N d P ; d P m P ; P m g R ; g m ; g R S ,N ,d ,N R S ; S R g m d P ; d P m g R g m P ; P d N S' N d P ; P d N S' ; P d S' R' ; S' R' g' R' S' N d P ; P d N R' N d ; N d m; d m g R; g P m g R S ,N ; g R S ,N ,d ,N R S ;`,
    ramdasi_malhar: `S R G m ; m R P ; P G m ; P g g m R S ; ,N S R G m ; P G m R P ; m P D N S' ; S' n D n P ; D P m G m ; S m R P ; S R G G m ; m G m ; (n)P g g m ; R S ; m P D n P ;`,
    basant_bahar: `M d r' S' ; N S' r' N d P ; G M d N M G ; M d G M G ; M G M G r S ; S ,N r S ; S G M P ; M P M G M G ; M G r S ; M d N d P ; G M d N M G ; P M G M G ; M G r S ; M d r' S' ; r' N d P ; M P M G M G ; G M N M G ; P M G M G r S ; S m m G ; S m ; P m g m ; n P m ; m n D N S' ; n P m ; P m ; g m R S; g m D N S' ; N R' S' ; D N S' R' g' R’ g’ S’ R' N S' ; N S' R' R' S' N S' ; S' n D N S' ; R S ,N S m `,
    gopika_basant: `,d ,n S g m P ; n d m P g m g S ; g m d n d P ; d m P g m g S ; ,d ,n S; S g m P m g g m d n S' ; S' n d m P g m P m g S; ,d ,n S g m g S; g g m g S ; S g m P m ; m P m g S ; g m d d n d m ; P d n ; m n d ; P m g m P ; g m g ; n d m P g m ; g m P m g S; ,d ,n ,d S ,n g S ; g m g S ; n d P n d P m g ; P m P m g ; g' S' n ; d n ; P d m P g m ; P m g S ; ,d ,d ,n ,n S`,
    jaijaivanti: `,D ,n R ; R g R S ; ,N S ; R m P N ; n D P ; S ,D ,n R; G m P m G R ; R m P N S' ; S' n D P m G R g R S; ,N S ,D ,n R S; ,P R `,
    nat_bhairav: `R G m d P ; m G R ; G m R S ,N ,d S ; S R R G ; G m m P ; m G m R ; S R S ; P d d P d N S' ; S' N d P ; P m G m ; G m d N S' ; d N d S' ; S' R' S' d d P ; S' N d P ; S R ; R G ; G m ; m P m ; G m R S ; R G m d P ; P d m ; m P G ; G m R G ; R G m R S ; ,N ,d S ; G m d N S' ; N d S' ; S' R' S' ; S' R' S' N d P ; N S' R' S' d P ; G m R ; R S ; ,d ,N S`,
    kafi: `g R ; m P ; m P D P ; D n S' ; n D P ; S R m P ; D m P g R ; D P  m P  m P  g R ; R g  m P  R g  R ; n D P m g R ; n D ; m P D n P D S' ; S' n D P m P D P g R ; P m g R m g R S;`,
    bhoop: `G R G; P G; D P; S' D P G; P G R G; G R S;  S ,D S R G ; R G S R ,D S ; S R G P ; P G R G ; R P G ; G S R ; R ,D S ; G R G ; P G ; P D P P ; D P ; G P R G R S ,D S ; S R G R G P D S' ; P D P S' ; S' S' ; R' S' D S' ; D S' R' G' R' S' ; D S' D P G R G ; P R G R S ; R ,D S `,

    patdeep: `g m P N S' D P ; m g m P N N N S' ; D P m g m P ; P g m ; g R S ,N ,N S; ,N S ; g m P ; m g R S ;  g m P D P ; g m P N S' ; N S' D P ; D P m g m g ; m P m g m g R S`,

    bairagi: `m P n P m r ; r P m r S ; ,n S r S ; ,n S r m P n ; m n P ; n P m P m r ; ,n S ; r m P n P ; m P n n S' ; n P n S' r' S' ; r' S' n r' S' n P m ; P m r S ; ,n S r S ;`,

    bhairavi: `g S r S ; g m P ; d m d n S' ; r' S' d P g m r S; r g r g S r S ; g m P ; P d P ; P d n d m ; d P g m ; P m g m r r S ; ,d S ; S g m P ; P d P ; m M m ; g r S ; S g r m g ; S g P m g S r S ; ,n r ,n ,d ,n ,d ,P ,P ,d ,n ,d S;`,

    vachaspati: `,n S G M ; P D P ; M G R S ; R ,n S ; M G R S ; `,
}

var raags = Object.keys(raag_scales).sort();

