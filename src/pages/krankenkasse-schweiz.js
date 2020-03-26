import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Layout from "../components/Layout/Layout"
import Compare from "../components/Compare/Compare"
import ContactInfo from "../components/ContactInfo/ContactInfo"
import Lists from "../components/Lists/Lists"
import Text from "../elements/Text/Text"

const list = {}

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allMarkdownRemark(sort: { fields: fields___slug }) {
          edges {
            node {
              frontmatter {
                type
                shortName
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  )

  data.allMarkdownRemark.edges.map((edge, index) => {
    if (edge.node.frontmatter.type === "krankenkasse") {
      let name = edge.node.frontmatter.shortName
      let letter = name.charAt(0)
      if (!(letter in list)) {
        list[letter] = []
      }
      list[letter].push(name)
    }
  })

  return (
    <Layout>
      <div>
        <Text type="title">Liste aller Krankenkassen in der Schweizer</Text>
        <Text type="paragraph">
          Dem Schweizer Krankenkassengesetz (KVG) zufolge müssen alle in der
          Schweiz wohnhaften Personen bei einer Schweizer Krankenkasse
          versichert sein. Das gilt für Schweizer sowie für Ausländer. Unter den
          Krankenversicherern herrscht starker Wettbewerb. In der
          Grundversicherung ist jede Krankenkasse zum Angebot gleicher
          Leistungen verpflichtet. Die Höhe der Prämien unterscheidet sich
          jedoch von Krankenkasse zu Krankenkasse und ist zudem abhängig vom
          Wohnkanton. Gerade in der Grundversicherung zahlen viele Versicherte
          zu hohe Prämien. Dabei können Sie pro Jahr mehrere Hundert Franken
          sparen, wenn Sie Ihre Krankenkasse wechseln.
        </Text>
        <Compare />

        <Lists data={list} />

        <Text type="paragraph">
          Wir machen Ihnen den Wechsel der Krankenkasse leicht. Mit unserem
          Prämienvergleich ermitteln Sie Ihr Sparpotenzial und fordern direkt
          eine kostenlose Offerte an. Die Krankenkassen-Liste bietet Ihnen zudem
          detaillierte Informationen zu den einzelnen Krankenversicherern in der
          Schweiz.
        </Text>
        <Text type="paragraph">
          Jede Krankenkasse in der Schweiz untersteht dem BAG (Bundesamt für
          Gesundheit). Der Schweizer Bund überprüft die von den Versicherern
          erhobenen Prämien. Jedes Jahr im Herbst veröffentlicht das BAG
          (Bundesamt für Gesundheit) die aktuelle Prämienübersicht für das
          kommende Jahr. Prämienerhöhungen muss eine Krankenversicherung ihren
          Versicherten zudem schriftlich mitteilen.
        </Text>
        <Text type="paragraph">
          Spätestens, wenn Sie eine Nachricht über eine Prämienerhöhung erhalten
          haben, ist es an der Zeit, über einen Wechsel nachzudenken. Wir
          stellen Ihnen einen Prämienvergleich mit den aktuellen Daten des BAG
          zur Verfügung. Mit wenigen Klicks vergleichen Sie die Prämien Ihrer
          Krankenkasse und ermitteln Ihr Sparpotenzial. Möchten Sie Ihre
          Krankenkasse wechseln, können Sie bei uns gleich Ihre alte
          Krankenkasse kündigen und eine Offerte für eine günstigere
          Krankenversicherung einholen.
        </Text>
        <ContactInfo />
      </div>
    </Layout>
  )
}
