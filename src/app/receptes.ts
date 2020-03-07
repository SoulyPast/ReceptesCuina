export class Receptes {
    id_recepta: number;
    nom_recepta: string;
    descripcio : string;
    ingredients: string;
}

export const RECEPTES: Receptes [] = [{id_recepta:1,nom_recepta:"Pastís de poma i canyella",descripcio:"Traiem el cor a 2 pomes Golden.Posem les pomes en una safata de forn i omplim els centres amb 2 canons de canyella, un raig de cava i dos cullerades de sucre panela (40 g) per sobre.  Ho enfornem a 180º durant 25 minuts.En dos bols separem clares i rovells de 4 ous.Muntem a punt de neu amb les varetes elèctriques les clares amb un polsim de sal.Blanquegem els rovells amb 100 g de sucre panela.Sense deixar de batre, hi afegim al bol dels rovells 50 g de mantega pomada i un raig d'oli de gira-sol.Barregem en un bol 150 g de farina i 2 cullerades de canyella en pols i  tamisem la meitat en el bol a poc a poc, barrejant-ho amb la llengua.Afegim a poc a poc les clares muntades.Acabem d'integrar la farina tamisant-la i afegint-hi 5 g de llevat. Ho barregem i deixem reposar durant 30 minuts en el bol filmat.Traiem del forn les pomes i les deixem refredar al costat de la vitro.Esmicolem la polpa de les pomes fornejades i les afegim al bol de la massa. Ho barregem.Untem amb mantega un motlle rodó i hi espolsem farina. Després aboquem la massa.",ingredients:"4 ous,150 g farina,180 g de sucre panela,50 g  de mantega,40 g oli de gira-sol,5 g de llevat,2  pomes Golden,2 pomes Granny Smith,2 cullerades de canyella en pols,2 canonets de canyella,cava,sal"},
                                      {id_recepta:2,nom_recepta:"QWERTY",descripcio:"Traiem el cor a 2 pomes Golden.Posem les pomes en una safata de forn i omplim els centres amb 2 canons de canyella, un raig de cava i dos cullerades de sucre panela (40 g) per sobre.  Ho enfornem a 180º durant 25 minuts.En dos bols separem clares i rovells de 4 ous.Muntem a punt de neu amb les varetes elèctriques les clares amb un polsim de sal.Blanquegem els rovells amb 100 g de sucre panela.Sense deixar de batre, hi afegim al bol dels rovells 50 g de mantega pomada i un raig d'oli de gira-sol.Barregem en un bol 150 g de farina i 2 cullerades de canyella en pols i  tamisem la meitat en el bol a poc a poc, barrejant-ho amb la llengua.Afegim a poc a poc les clares muntades.Acabem d'integrar la farina tamisant-la i afegint-hi 5 g de llevat. Ho barregem i deixem reposar durant 30 minuts en el bol filmat.Traiem del forn les pomes i les deixem refredar al costat de la vitro.Esmicolem la polpa de les pomes fornejades i les afegim al bol de la massa. Ho barregem.Untem amb mantega un motlle rodó i hi espolsem farina. Després aboquem la massa.",ingredients:"4 ous,150 g farina,180 g de sucre panela,50 g  de mantega,40 g oli de gira-sol,5 g de llevat,2  pomes Golden,2 pomes Granny Smith,2 cullerades de canyella en pols,2 canonets de canyella,cava,sal"},
                                      {id_recepta:3,nom_recepta:"ASDFGH",descripcio:"Traiem el cor a 2 pomes Golden.Posem les pomes en una safata de forn i omplim els centres amb 2 canons de canyella, un raig de cava i dos cullerades de sucre panela (40 g) per sobre.  Ho enfornem a 180º durant 25 minuts.En dos bols separem clares i rovells de 4 ous.Muntem a punt de neu amb les varetes elèctriques les clares amb un polsim de sal.Blanquegem els rovells amb 100 g de sucre panela.Sense deixar de batre, hi afegim al bol dels rovells 50 g de mantega pomada i un raig d'oli de gira-sol.Barregem en un bol 150 g de farina i 2 cullerades de canyella en pols i  tamisem la meitat en el bol a poc a poc, barrejant-ho amb la llengua.Afegim a poc a poc les clares muntades.Acabem d'integrar la farina tamisant-la i afegint-hi 5 g de llevat. Ho barregem i deixem reposar durant 30 minuts en el bol filmat.Traiem del forn les pomes i les deixem refredar al costat de la vitro.Esmicolem la polpa de les pomes fornejades i les afegim al bol de la massa. Ho barregem.Untem amb mantega un motlle rodó i hi espolsem farina. Després aboquem la massa.",ingredients:"4 ous,150 g farina,180 g de sucre panela,50 g  de mantega,40 g oli de gira-sol,5 g de llevat,2  pomes Golden,2 pomes Granny Smith,2 cullerades de canyella en pols,2 canonets de canyella,cava,sal"}
                                    ];

 export class Comentaris {
 id_recepta: number;
  nom_comentari: string;
  num_estrelles: number;
  date: string;
 }
 
export const COMENTARIS: Comentaris [] = [{id_recepta:1,nom_comentari:"Bonissimes!",num_estrelles:5,date:"11/23/2019"}];                                    