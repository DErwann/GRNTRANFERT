# Utilisation de GRN Tranfert 

Pour télécharger le document, vous devez ouvrir votre terminal de commande puis réaliser la commande\
`git clone https://github.com/DErwann/GRNTRANFERT.git`
Vous aurez ainsi le dossier du github


## ATTENTION
Pour que l'application web fonctionne il vous faudra faire quelques manipulations au préalable: 

### 1er Mise en place de la base de données sur MySQL 
Executez les commandes suivante dans le terminal de MySqL Command Line Client \
`create database db_grntransfertv3;` \
Créer un user pour spring :\
` create user 'springuser'@'%' identified by 'ThePassword'; ` 

Puis accorder les accès à cet user : \
`grant all on db_grntransfertv3.* to 'springuser'@'%';`

## Pour lancer le back du projet 

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

### Attention lors du premier lancement, il faut changer une valeur pour mettre en place la BDD, il faut ce rendre dans le fichier 
src\main\resources\application.proprerties 
`spring.jpa.hibernate.ddl-auto=create ` cette commande permet créer la base de données mais après le premier lancement il faut mettre cette valeur à `none`,sinon la base de donnée va se réécrire à chaque lancement et donc entrainer la perte de données.

### `npm start`

Pour visualiser le front il faudra ce rendre dans votre navigateur 
Open [http://localhost:3000](http://localhost:3000) .

Si cette commande ne fonctionne pas effectuer : 

### `npm run build`

puis réesayez `npm start`

vous pouvez écrire des projets et ils seront enregistrés dans la base de données

## Pour lancer la Dapp
Etant donné que la Dapp est déployé sur un réseau test et que l'ajout de client et commerçant n'a pas été encore effectué, il faudra pour expérimenter le processus de transaction mettre en place un réseau test à l'aide de Ropsten. Cependant vous pouvez avoir un aperçu par le lien https://oneclickdapp.com/zoom-clock

- Se munir de l'extension http://metamask.io/
- Par la suite changer sur le réseau Ropsten
- Créer trois comptes : Le client, le marchant et enfin la cagnotte
- Aller sur "", pour approvisionner le compte client dans le but de déployer le smart contract
Une fois ceci réalisé, nous pouvons déployer le smart contract à l'aide de https://oneclickdapp.com/.
- Ouvrir sur l'ide en ligne https://remix.ethereum.org/ le fichier LOKO.sol
- Compiler le smart contract
- Pour le déploiement, sélectionner l'environnement : "Injected Web3", sélectionner l'adresse du compte crédité, sélectionner le contrat "LOKOToken - LOKO.sol" et enfin déployer le smart contract.
Il ne reste plus que le déploiement de la Dapp à l'aide de l'extension sur remix OneClickDapp. Pour créer la Dapp il suffit de l'adresse de déploiement. Une fois le lien url généré, il est possible d'y accéder et intéragir avec le système en se connectant sur le compte client.

## Pour La distribution des tokens de la cagnotte certifié vers les commerçants
Pour visualiser la distribution, if faut ouvrir le fichier PoolDitribution.ipynb dans le dossier distribution_cagnotte.
