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

Vous devrez executer la commande dans le dossier testtablesmultiples :\
`mvnw spring-boot:run` \
Si tout fonctionne la dernière ligne devrait être :\
`Started TesttablesmultipleApplication in 4.298 seconds (JVM running for 4.739)`

Le back est fonctionnel, les commandes de l'API sont : 
GET :
`http://localhost:8080/apiGRN/getAllTransactions` pour avoir la liste de tous les transactions \
`http://localhost:8080/apiGRN/getAllProjects` pour avoir la liste de tous les projects 

POST : 
`http://localhost:8080/apiGRN/addTransaction?sender={senderadress}&receiver={receiveradress]&amount={amount}` pour enregistrer une transaction \
`http://localhost:8080/apiGRN/addProject?title={titre}&localisation={localisation}&description={description}&objectif={objectif}` pour enregistrer un projet \

DELETE : 
`http://localhost:8080/apiGRN/delProject/{id}` supprime le project avec l'id (cette commande n'est pas deployé dans le front)

## Pour lancer le front

vous devrez lancer comme commande dans le terminal de ce dossier `grntranfert_front`

### `npm start`

Pour visualiser le front il faudra ce rendre dans votre navigateur 
Open [http://localhost:3000](http://localhost:3000) .

Si cette commande ne fonctionne pas effectuer : 

### `npm run build`

puis réesayez `npm start`

vous pouvez écrire des projets et ils seront enregistrés dans la base de données


