Create il vostro file, prendere come esempio il file LocalFooterHome.tsx presente all’interno della cartella config. N.B Il file deve avere l’estensione tsx altrimenti si potrebbero creare dei problemi con le icone di react-icons.
Creare una variabile di configurazione che ha come tipo LocalFooterType all’interno del file Interfaces.ts.
Importare la variabile creata all’interno del componente LocalFooterEa:

<LocalFooterEa config={nome della variabile importata dal file di configurazione} />
