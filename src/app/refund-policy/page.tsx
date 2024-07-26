import "./refund.css";

function Refund() {
  return (
    <>
      <div className="headp">
        <div className="breadcrumb">
          <span>
            <a href="" style={{ color: "black" }}>
              Home
            </a>
          </span>
          <span className="separator">•</span>
          <a href="#refund-policy">Politique de remboursement</a>
        </div>
        <div className="header-section">
          <h1>Remboursement ou annulation</h1>
        </div>
      </div>

      <div className="container">
        <h1>Un moment s'il vous plait.</h1>
        <p>
          Nous croyons à 100% en nos produits. Nous faisons de notre mieux
          chaque jour pour vous rendre heureux et vous faire sourire lorsque
          vous utilisez notre service, mais nous comprenons que ce n'est pas
          facile pour tout le monde. Si vous n'êtes pas satisfait de votre achat
          ou si vous rencontrez un problème que nous ne pouvons pas résoudre et
          qui rend le système inutilisable, nous serons plus qu'heureux de vous
          rembourser.
        </p>
        <h1>Comment demander un remboursement ?</h1>
        <p>
          Veuillez noter votre numéro de commande de transaction avec le sujet :
          "Demande et remboursement" et décrire dans votre envoyez un e-mail aux
          problèmes auxquels vous êtes confronté et à la raison de cette
          demande. Dans certains cas, vous devrez peut-être nous fournir avec
          des preuves, et nous vous enverrons également des preuves de notre
          travail et des choses que nous avons remarquées pour mieux vous
          expliquer notre point de vue et notre décision de manière plus
          détaillée et plus transparente.
        </p>
        <h1>Conditions:</h1>
        <p>
          Veuillez comprendre et accepter que nous ne pouvons pas effectuer de
          remboursement en raison de problèmes techniques, sauf si vous nous
          autorisez à le faire. tenter de résoudre correctement le problème et
          de vous fournir de l'aide. Si nous ne parvenons pas à résoudre votre
          problème dans les 48 heures, nous vous rembourserons. Veuillez
          contacter notre assistance en direct 24h/24 et 7j/7 à tout moment si
          vous besoin d'assistance. Les remboursements ne peuvent être effectués
          que dans les 7 jours suivant la date d'achat. Après 7 jours, les
          remboursements ne pourront pas être traités. Si vous avez payé par
          carte de crédit, les remboursements sont généralement traités et les
          fonds reversés sur la carte de débit du client. compte bancaire dans
          les 20 à 31 jours ouvrables. Cependant, il existe des cas où le
          traitement d’un remboursement peut prendre plus de temps, jusqu’à 90
          jours. Nous ne sommes pas responsables pour ces délais et retards.
          Nous ne sommes pas le fournisseur de paiement, uniquement le
          fournisseur de services IPTV. Nous ne rembourserons intégralement que
          les achats effectués dans un délai inférieur à 7 jours. Toutes les
          autres demandes de remboursement seront partiellement remboursé en
          fonction de la durée d'abonnement utilisée. L'équipe d'assistance
          contactera les utilisateurs dans tous les cas cas de remboursement.
          Remarque : Chaque remboursement prend généralement entre 20 et 90
          jours ouvrables et il ne nous appartient pas de réduire ce délai.
          Remboursement les demandes seront traitées par nos processeurs de
          paiement. Nous ferons de notre mieux pour rembourser les utilisateurs
          immédiatement après voir la demande et vérifier les informations de
          l'utilisateur.
        </p>
        <h1 style={{ marginBottom: "30px" }}>
          Nous n’effectuerons pas de remboursement ni de remboursement partiel
          si :
        </h1>
        <div className="alert">
          <h2>
            L'utilisateur ne peut pas configurer son propre boîtier et son
            système de son côté :
          </h2>

          <p>
            Nous vous apporterons notre meilleur accompagnement pour configurer
            vos box, appareils, applications et système dans tous les cas de
            demande de soutien. La raison en est que nous ne connaissons pas les
            circonstances concernant la box, les appareils et le système, etc.
            Notre assistance se limite aux étapes prédéfinies pour la
            configuration de l'appareil.
          </p>
          <h2>
            Certains canaux se figent, se mettent en mémoire tampon ou
            fonctionnent RAREMENT :
          </h2>
          <p>
            Bien que la plupart de nos serveurs soient stables, il arrive
            parfois que certaines chaînes se bloquent ou ne fonctionnent pas à
            cause de diverses raisons. raisons, mais ce n'est pas permanent. Nos
            ingénieurs experts travaillent toujours à leur réparation.
          </p>
          <h2>
            La plupart du temps, ces problèmes sont temporaires et sont causés
            par les raisons suivantes :
          </h2>
          <ul>
            <li style={{ listStyle: "circle" }}>
              Fluctuations de la connexion Internet du client.
            </li>
            <li style={{ listStyle: "circle" }}>
              Problème avec les paramètres box/apps/client en général.
            </li>
            <li style={{ listStyle: "circle" }}>Votre FAI a un problème.</li>
            <li style={{ listStyle: "circle" }}>
              Le canal est hors service du côté du serveur.
            </li>
            <li style={{ listStyle: "circle" }}>
              Le client a changé d'avis et a voulu quitter/basculer entre les
              serveurs.
            </li>
          </ul>
          <p>
            Dans le cas où l'utilisateur/client ne peut pas regarder son plan
            d'abonnement IPTV pendant 48 heures ou plus en raison de problème de
            serveur ou d'autres problèmes causés par nous, nous rembourserons
            intégralement le prix du forfait ou ajouterons tous les perdus du
            temps en plus de votre abonnement gratuitement, plus un bonus
            supplémentaire que nous pouvons négocier ensemble.
          </p>
          <h1>Contactez-nous:</h1>
        </div>
        <ul>
          <div className="contact">
            <li style={{ listStyle: "circle" }}>
              email : Teambay@baycorp.digital
            </li>
            <li style={{ listStyle: "circle" }}>
              Whatsapp :
              <a href="https://api.whatsapp.com/send?phone=33758791697">
                +33 7 58 79 16 97
              </a>
            </li>
          </div>
        </ul>
      </div>
    </>
  );
}

export default Refund;
