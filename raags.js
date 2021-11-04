var raag_scales = {
    yaman: "S R G M P D N",
    kalavati: "S G P D n",
    jog: "S g G m P n ",
    bahar: "S R g m P D n N",
    basant: "S r G m M P d N",
    keervani: "S R g m P d N",
    ramdasi_malhar: "S R g G m P D n N",
    basant_bahar: "S r R g G m M P d D n N",
    gopika_basant: "S g m P d n",
    jaijaivanti: "S R g G m P D n N",
    nat_bhairav: "S R G m P d N",
};

var raag_phrases = {
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
    nat_bhairav: `R G m d P ; m G R ; G m R S ,N ,d S ; S R R G ; G m m P ; m G m R ; S R S ; P d d P d N S' ; S' N d P ; P m G m ; G m d N S' ; d N d S' ; S' R' S' d d P ; S' N d P ; S R ; R G ; G m ; m P m ; G m R S ; R G m d P ; P d m ; m P G ; G m R G ; R G m R S ; ,N ,d S ; G m d N S' ; N d S' ; S' r' S' ; S' R' S' N d P ; N S' r' S' d P ; G m R ; R S ; ,d ,N S`,
}

var raags = Object.keys(raag_scales).sort();

