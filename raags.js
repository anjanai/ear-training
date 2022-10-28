var raag_scales = {
    abhogi_kanada: "S R g m D",
    bahar: "S R g m P D n N",
    bairagi: "S r m P n",
    basant: "S r G m M P d N",
    basant_bahar: "S r R g G m M P d D n N",
    bhairavi: "S r g m P d n",
    bhoop: "S R G P D",
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

