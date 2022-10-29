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
    bhatiyar: "S r g m M P D N",
    bheem: "S R G m P D n",
    bheempalasi: "S R g m P D n",
    bhoop: "S R G P D",
    bhupal_todi: "S r g P d",
    bihag: "S R G m M P D N",
    bihagda: "S R G m P D n N",
    bilaskhani_todi: "S r g m P d n",
    chandrakauns: "S g m d N",
    charukeshi: "S R G m P d n",
    chhayanat: "S R G m M P D N",
    darbari_kanada: "S R g m P d n",
    des: "S R G m P D n N",
    deshkar: "S R G P D",
    
    gopika_basant: "S g m P d n",
    jaijaivanti: "S R g G m P D n N",
    jog: "S g G m P n ",
    kafi: "S R g m P D n",
    kalavati: "S G P D n",
    kedar: "S R G m M P D N",
    keervani: "S R g m P d N",
    nat_bhairav: "S R G m P d N",
    patdeep: "S R g m P D N",
    ramdasi_malhar: "S R g G m P D n N",
    vachaspati: "S R G M P D n",
    yaman: "S R G M P D N",
};

var raag_phrases = {
    deshkar: `S R G P D ; D G P ; S' D ; P D G P ; G R S ; ,D S; S R G P D S'; S' D P D G P G R S; S R G P D ; D G P ; P D G P ; S' D ; D S' R' D R' S' ; S' D D P ; P D G P ; G (R) S ; S ,D S ; S G P D P ; G (R) S;`,


    des: `D m G R; G ,N S; R m P N; S' R' n D P ; S R m P N S' ; S' n D P D m G R G ,N S ; R R m G R ; D P n D P ; R' R' m' G' R' ; G' N S' ; D m P; N N N S'`,


    darbari_kanada: `S R g g ; m P d d n P ; n m P S' ; S' d n P m P g m R S ; ,d ,n S; S R g m P d n S' ; S' d n P m P g m R S; ,n S R ; R S ; ,n S R S ; S S R R S ,n S ; (,n) ,d ; ,n ,d ,n S ; ,n ,n S ; ,n ,n R ; R g (R)g ; g m P ; (m)g m R S ; R ,n S ; (,n),d (,n),d ,n ,n S ; ,d ,n R S ; m P d (P)d n ; d n S' ; S' (n)d n P ; m P ; n n P m P ; m P ; (m)g g m R S ;`,


    chhayanat: `,P R R ; R G m P ; G m R S ; S' P R G ; m G m R S R S; S R G R ; G P m G R S ; S R G m P D N S' ; S' N D P M P D P ; R G m P m G R S; R R G ; G m P m ; G m R ; R G m P ; P D P R ; R G m P ; m G m R S ; ,P ,P S ; ,P R S ; R G m P D P R ; R R G ; G G m ; P m G m R S ; ,P S R R S ; R G m P ; P D P ; P M D P P R ; G m P S' ; R' S' ; D D P ; D P M P ; R R G ; R G m P D P ; M P M P D P ; D N D P ; R G R S ; ,P S R R S ; R G m n D P ; R R S ;`,
    
    charukeshi: `,d ,n S R G m G R ; R G m d P ; R G m R S ; S R G m P d n S' ; S' n d P m G R S ,d ,n S ; m G R ; G R S ,n ,d S ; S R G m ; R G m R S ; G m d P ; m G R ; G m P d n S' ; G m d n ; n S' ; n S' R' S' d ; d n R' S' ; n S' n d P ; P d n d m ; G R G m R S ; ,n ,d ,n R S ; m P d n S' R' ; S' R' G' R' ; G' R' n d S' ; S' n d P d m G R ; G m d P ; G m R S ,n ,d ,n R S ;`,
    chandrakauns: `S g m g S ,N ; ,N S ; g m d N S'; N d S' ; N d m g m g S ,N S; N ,d ,N S ; g m d N S' ; m d m N ; N S' G' S' N S' N ; N d ; m d N d m ; m g m g S ; m g S ,N ; S g m g S ; ,N ,N S;`,

    bilaskhani_todi: `S r ,n ,d S ; S r g ; r g P ; P d n d ; d m g r ; g r S ; S r g P d S' ; S' r' n d  P ; P d n d m g r ; r g r S ; S r g P ; d m g r ; g r g r S ; r ,n ,d S ; S r g P ; d n d P ; g P d S' ; S' r' n d ; d S' r' ; r' n S' r' g' ; g' r' n d ; P d n d m ; g r ; g r S ;`,

    bihag: `,N S G ; G m G ; P M P G m G ; P M G m G R S; S G m P N S' ; S' N D P M P G m G R S, S' N D P M G m G R S;`,
    bihagda: `S G m P ; m P G S; G m n D P ; G m G ; G m P N S' ; S' N P ; D n D P ; G m G ; m P m P G S; S G m P N S' - S' N P ; P D n D P ; G m G ; P m G S; N ,N S ; S ,N  ,P ; ,P ,N S ; ,N S G ; G m G  S ; S G ; G m P mP G S ; S G m D ; D P ; G m P m P G (R) S ; G m P D n D P ; G m G ; G m P N S' N (D) P ; D N S' N P ; D n D P ; P D G m G ; P m G (R) S ; G m n D P ; G m P S' ; N S' G' R' S' ; S' R' S' N (D) P ; n D P ; G m G ; G m P m P ; G (R) S;`,
    
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

    patdeep: `g m P N S' D P ; m g m P N N N S' ; D P m g m P ; P g m ; g R S ,N ,N S; N S ; g m P ; m g R S ;  g m P D P ; g m P N S' ; N S' D P ; D P m g m g ; m P m g m g R S`,

    bairagi: `m P n P m r ; r P m r S ; ,n S r S ; ,n S r m P n ; m n P ; n P m P m r ; ,n S ; r m P n P ; m P n n S' ; n P n S' r' S' ; r' S' n r' S' n P m ; P m r S ; ,n S r S ;`,

    bhairavi: `g S r S ; g m P ; d m d n S' ; r' S' d P g m r S; r g r g S r S ; g m P ; P d P ; P d n d m ; d P g m ; P m g m r r S ; ,d S ; S g m P ; P d P ; m M m ; g r S ; S g r m g ; S g P m g S r S ; ,n r ,n ,d ,n ,d ,P ,P ,d ,n ,d S;`,

    vachaspati: `,n S G M ; P D P ; M G R S ; R ,n S ; M G R S ; `,
}

var raags = Object.keys(raag_scales).sort();

