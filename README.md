# Utilisation de GRN Tranfert 


## ATTENTION
Pour que l'application web fonctionne il vous faudra faire quelque manipulation au préalable: 

### 1er Mise en place de la base de données sur MySQL 
Executez les commandes suivante dans le terminal de MySqL Command Line Client \
`create database db_grntransfertv3;` \
Créer un user pour spring :\
` create user 'springuser'@'%' identified by 'ThePassword'; ` 

Puis accorder les accès à cet user : \
`grant all on db_grntransfertv3.* to 'springuser'@'%';`

## Pur lancer le back du projet 

Vous devrez executer comme la commande 

## Pour lancer le front

vous devrez lancer comme commande dans le terminal de ce dossier `grntranfert_front`

### `npm start`

Pour visualiser le front il faudra ce rendre dans votre navigateur 
Open [http://localhost:3000](http://localhost:3000) .

Si cette commande ne fonctionne pas effectuer : 

### `npm run build`

puis réesayez `npm start`


