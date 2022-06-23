import { Center, Group, Text, Title } from "@mantine/core";

function References() {
  const referenceList = [
    "Abinales, P. N., & Amoroso, D. J. (2005). <i>State and society in the Philippines.</i> Rowman & Littlefield Publishers.",
    "Alburo, F. A. (1999). The Asian financial crisis and Philippine responses: Long-run considerations. <i>The Developing Economies</i>, 37(4), 439-459. https://doi.org/10.1111/j.1746-1049.1999.tb00242.x",
    "Anderson, E. A. (1976). The encomienda in early Philippine colonial history. <i>Asia Studies</i> (14), 25-36.",
    "Ara, S. (2008). Food Supply Problem in Leyte, Philippines, during the Japanese Occupation (1942-44). <i>Journal of Southeast Asian Studies</i>, 39(1), 59–82. http://www.jstor.org/stable/20071870",
    "Balbosa, J. Z. (1992). <i>IMF Stabilization Program and Economic Growth: The Case of the Philippines</i>. Philippine Institute for Development Studies. https://ideas.repec.org/p/phd/pjdevt/jpd_1992_vol__xix_no__2-b.html",
    "Beede, B. R. (1994). <i>The War of 1898 and U.S. Interventions, 1898T1934: An Encyclopedia</i>. https://books.google.com.ph/books?id=rg6BAAAAQBAJ",
    "Boxer, C. R. (1950). A Late Sixteenth Century Manila MS. <i>The Journal of the Royal Asiatic Society of Great Britain and Ireland, 1/2</i>, 37–49. http://www.jstor.org/stable/25222372",
    "Gascon, M. (2018, December 16). <i>DSWD: Don't give alms to street beggars.</i> INQUIRER.net. https://newsinfo.inquirer.net/1063610/dswd-dont-give-alms-to-street-beggars",
    "Golay, F. (1955). Economic Consequences of the Philippine Trade Act. <i>Pacific Affairs</i>, 28(1), 53–70. https://doi.org/10.2307/2753711",
    "Halili, M. <i>Philippine History</i>. Rex Book Store, 2004, https://books.google.com.ph/books?id=gUt5v8ET4QYC.",
    "IBON Databank Philippines. (1988). Land reform in the Philippines. Metro Manila: IBON Databank Phils. Inc.",
    "Jimenez, Jose Victor. (2020). Ensuring American control over the Philippine economy through the imposition of the parity rights.",
    "Keck, M. (2022, Jan 11). The Pandemic Pushed 4 Million More Filipinos into Poverty. Retrieved from https://www.globalcitizen.org/en/content/philippines-poverty-covid-19/",
    "Larkin, J. A. (1982). Philippine History Reconsidered: A Socioeconomic Perspective. <i>The American Historical Review</i>, 87, 595. doi:10.2307/1864158",
    "Macaranas, B. (2015). Feudal Work Systems and Poverty: The Philippine Experience.",
    "Manapat, C. L. (2010). <i>Economics, taxation, and agrarian reform.</i>",
    "<i>Martial law in data.</i> (n.d.). Martial Law Museum. Retrieved June 23, 2022, from https://martiallawmuseum.ph/magaral/martial-law-in-data/",
    "Mintz, M. (2008). Children in Late Sixteenth and Early Seventeenth Century Lowland Philippine Societies. <i>Intersections: Gender, and Sexuality in Asia and the Pacific, 16</i>, N-A.",
    "National Disaster Coordinating Council. (2009).<i> Final Report on tropical storm 'ONDOY' and typhoon 'PEPENG'</i>. https://ndrrmc.gov.ph/attachments/article/1543/Update_Final_Report_TS_Ondoy_and_Pepeng_24-27SEP2009and30SEP-20OCT2009.pdf",
    "<i>NDRRMC situation report on the effects of typhoon Yolanda, December 11, 2013 (6:00 A.m.)</i>. (2013, December 11). Republic of the Philippines. https://www.officialgazette.gov.ph/2013/12/11/ndrrmc-situation-report-on-the-effects-of-typhoon-yolanda-december-11-2013-600-a-m/",
    "Owen, N. G. (1971). Philippine Economic Development and American Policy: A Reappraisal. In N. G. Owen (Ed.), <i>Compadre Colonialism: Studies in the Philippines under American Rule </i>(pp. 103–128). University of Michigan Press. http://www.jstor.org/stable/10.3998/mpub.11903511.11",
    "<i>Polo Y Servicio.</i> (2021, February 2). Tagalog Lang. Retrieved June 23, 2022, from https://www.tagaloglang.com/polo-y-servicio/",
    "<i>Presidential decree No. 1563, S. 1978.</i> (1978, June 11). Republic of the Philippines. https://www.officialgazette.gov.ph/1978/06/11/presidential-decree-no-1563-s-1978/",
    "Promchertchoo, P. (2019, October 20). <i>Kidney for sale: How organs can be bought via social media in the Philippines.</i> CNA. Retrieved June 23, 2022, from https://www.channelnewsasia.com/asia/kidney-organs-for-sale-on-facebook-in-philippines-857526?cid=youtube_cna_social_29012018_cna",
    "Romero, P. (2020, April 13). <i>Senator warns of possible surge in child cybersex traffic.</i> Philstar. Retrieved June 23, 2022, from https://www.philstar.com/headlines/2020/04/13/2006955/senator-warns-possible-surge-child-cybersex-traffic",
    "Scott, W. H. (1980). Filipino Class Structure in the Sixteenth Century. <i>Philippine Studies</i>, 28(2), 142–175. http://www.jstor.org/stable/42632521",
    "Scott, W. H. (1992).<i> Looking for the prehispanic Filipino</i>. https://archive.org/details/LookingForThePrehispanicFilipino/page/n11/mode/2up",
    "Scott, W. H. (1994).<i> Barangay: Sixteenth-century Philippine culture and society.</i>",
    "Sicat, G. P. (2003). The Philippine Economy During the Japanese Occupation, 1941-1945. <i>University of the Philippines School of Economics</i>. https://ideas.repec.org/p/phs/dpaper/200307.html",
    "UNICEF. (2018). <i>Situation Analysis of Children in the Philippines</i>. unicef.org/philippines/reports/situation-analysis-children-philippines",


  ];

  return (
    <div style={{ maxWidth: "1080px", margin: "auto" }}>
      <Center my={20}>
        <Title order={1}>References</Title>
      </Center>
      <Group direction="column" spacing={6} mb={40}>
        {referenceList.map((item, index) => (
          <Text
          dangerouslySetInnerHTML={{ __html: `[${index + 1}]` + item }}
          key={index}
        ></Text>
        ))}
      </Group>
    </div>
  );
}

export default References;
