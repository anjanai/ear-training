var raag_scales = {
    yaman: "S R G M P D N",
    kalavati: "S G P D n",
    jog: "S g G m P n ",
    bahar: "S R g m P D n N",
    basant: "S r G M P d N"
};

var raag_phrases = {
    yaman : `N R ; ,N R G ; ,N R ,N G ; R G ; ,N M G R S ; ,N R G ; M R G M P ; M D P ; M D N ; M D M N ; G M G ; N D P ; M R G ; ,N R S ; ,D ,N ,D S ; ,D ,N R G   ; ,N R G ; G R G ; ,N R ,N G ; ,N R G M R M G ; G R M G ; M P ; G M P R S   ; ,N R S ; ,N R G M P ; M P M P ; P M D P M P ; M D M N ; N D P ; M G ; G M D N  M D N ; N D P M G R  S ; ,N R S `,
    kalavati : `S G P D ; G P D ; P D P S' ; n D D ; n D P ; G P D ; G D P ; G P G S ; ,n ,D S ;`,
    jog : `G m P n P ; P n P m G m ; G m g S; S G m P ; n P m G ; G m ; m P ; m P m ; G m G g S ; G m P n S' ; P (S')n (S')n S' ; n S' g' S' ; g' S' n P m ; m P G m ; G m (S)g S ;`,
    bahar : `"S m ; P m g m ; n P m ; m n D N S' ; n P m ; P m ; g m R S; g m D N S' ; N R' S' ; D N S' R' g' R’ g’ S’ R' N S' ; N S' R' R' S' N S' ; S' n D N S' ; R S ,N S m `
    basant : `M d r' S' ; N S' r' N d P ; G M d N M G ; M d G M G ; M G M G r S ; S ,N r S ; S G M P ; M P M G M G ; M G r S ; M d N d P ; G M d N M G ; P M G M G ; M G r S ; M d r' S' ; r' N d P ; M P M G M G ; G M N M G ; P M G M G r S ; S m m G ; m d r' S';`
    
}

var raags = Object.keys(raag_scales).sort();
