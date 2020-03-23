import React from "react"

import Layout from "../components/Layout/Layout"
import Card from "../components/Card/Card"
import Text from "../elements/Text/Text"

export default () => (
  <Layout>
    <Text type="title">Informationen zum Thema Krankenversicherung</Text>
    <Card
      to="/krankenkasse-kuendigen"
      title="Krankenkasse kündigen"
      src="https://brokeradmin.ch/api/upload/glossary/banner_1565097763610_416166990.jpeg"
    >
      Kündigung Krankenkasse: So kündigen Sie Ihre Grundversicherung Die
      Grundversicherung ist die obligatorische Krankenkasse in der Schweiz, die
      jeder Eidgenosse abgeschlossen haben muss. Eine Kündigung ihrer
      Krankenkasse erwägen viele Versicherungsnehmer, wenn ihr Anbieter eine
      P...
    </Card>
    <Card
      to="/krankenkasse-vergleichen"
      title="Krankenkasse vergleichen"
      src="https://brokeradmin.ch/api/upload/glossary/banner_1565097776027_182814814.jpeg"
      side="right"
    >
      Machen Sie den Krankenversicherung Vergleich und entdecken Sie Ihr
      Sparpotenzial Jedes Jahr passen die Schweizer Krankenkassen ihre Prämien
      an. Im Jahr 2019 sind die Krankenkassenprämien für Erwachsene im
      Durchschnitt um 2,7 Prozent gestiegen, für Kinder um 1,2 Prozent. Das
      bel...
    </Card>
    <Card
      to="/krankenkasse-wechseln"
      title="Krankenkasse wechseln"
      src="https://brokeradmin.ch/api/upload/glossary/banner_1565097785945_199096505.jpeg"
    >
      Krankenversicherung wechseln: So gehen Sie vor Jeweils im Herbst genehmigt
      das Bundesamt für Gesundheit (BAG) die Krankenkassenprämien für das
      kommende Jahr. Die Krankenkassen müssen ihre Versicherungsnehmer
      spätestens bis zum 31. Oktober schriftlich über die neuen monatlichen ...
    </Card>
    <Card
      to="/zusatzversicherungen"
      title="Krankenkasse wechseln"
      src="https://krankenkassenadmin.ch/assets/img/glossar-image.jpg"
      side="right"
    >
      Krankenversicherung wechseln: So gehen Sie vor Jeweils im Herbst genehmigt
      das Bundesamt für Gesundheit (BAG) die Krankenkassenprämien für das
      kommende Jahr. Die Krankenkassen müssen ihre Versicherungsnehmer
      spätestens bis zum 31. Oktober schriftlich über die neuen monatlichen ...
    </Card>
    <Card
      to="/glossar"
      title="Krankenkasse wechseln"
      src="https://krankenkassenadmin.ch/assets/img/glossar-image.jpg"
    >
      Krankenversicherung wechseln: So gehen Sie vor Jeweils im Herbst genehmigt
      das Bundesamt für Gesundheit (BAG) die Krankenkassenprämien für das
      kommende Jahr. Die Krankenkassen müssen ihre Versicherungsnehmer
      spätestens bis zum 31. Oktober schriftlich über die neuen monatlichen ...
    </Card>
    <Card
      to="/vorgeburtliche-anmeldung"
      title="Krankenkasse wechseln"
      src="https://krankenkassenadmin.ch/assets/img/glossar-image.jpg"
      side="right"
    >
      Krankenversicherung wechseln: So gehen Sie vor Jeweils im Herbst genehmigt
      das Bundesamt für Gesundheit (BAG) die Krankenkassenprämien für das
      kommende Jahr. Die Krankenkassen müssen ihre Versicherungsnehmer
      spätestens bis zum 31. Oktober schriftlich über die neuen monatlichen ...
    </Card>
  </Layout>
)
