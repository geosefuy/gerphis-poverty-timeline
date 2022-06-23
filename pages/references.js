import { Center, Group, Text, Title, Divider } from "@mantine/core";

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
  const imageReferenceList=[
    "<i>A 16th century CE portrait by Giacomo Antonio Moro of Philip II of Spain (r. 1556-1598 CE)</i> [Photograph]. (n.d.). https://www.worldhistory.org/uploads/images/12308.jpg",
    "[Photograph]. https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/US_propaganda_and_Japanese_soldier.jpg/400px-US_propaganda_and_Japanese_soldier.jpg",
    "[Photograph]. (n.d.). Aljazeera Media Network. https://www.aljazeera.com/wp-content/uploads/2016/01/07fec179bac24829abccd9a631ea3a1d_18.jpeg?fit=1000%2C562",
    "Alzina, F. I. (n.d.).<i> Bisayan chiefs and slaves</i> [Photograph]. JSTOR. https://www-jstor-org.dlsu.idm.oclc.org/page-scan-delivery/get-page-scan/1864158/5",
    "[Photograph]. (n.d.). Chinaworker. https://media.chinaworker.info/2017/06/international_monetary_fund_imf-438x600.gif",
    "<i>The COVID-19 pandemic has become a major global crisis, requiring forceful action at national, regional, and global levels, according to ADB president Masatsugu Asakawa</i> [Photograph]. (n.d.). Asian Development Bank. https://www.adb.org/sites/default/files/styles/content_media/public/content-media/87351-adb-assistance-final.jpg?itok=-RI-v3Ni",
    "<i>Eighty to 85 percent of trash found in the bay’s waters are from ISFs living along waterways, DILG Undersecretary for operations Epimaco Densing alleged</i> [Photograph]. (n.d.). Philstar. https://media.philstar.com/photos/2019/02/02/nat1-poverty-slums-squatters_2019-02-02_20-29-11.jpg",
    "<i>First inauguration of Manuel Quezon at the steps of the Legislative Building in Manila on November 15, 1935</i> [Photograph]. (n.d.). https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Manuel_Quezon_first_inauguration.jpg/440px-Manuel_Quezon_first_inauguration.jpg",
    "Foreman. (n.d.). <i>First-place winner of a Laguna province corn-growing contest</i> [Photograph]. JSTOR. https://www-jstor-org.dlsu.idm.oclc.org/page-scan-delivery/get-page-scan/24672307/17",
    "[Photograph]. (n.d.). GetRealPost. https://www.getrealphilippines.com/2018/12/breadloser-mentality/",
    "[Photograph]. (n.d.). Greenpeace. https://www.greenpeace.org/static/planet4-philippines-stateless/2019/05/bf08169f-bf08169f-gp04xys_medium_res_with_credit_line.jpg",
    "<i>An image taken by one of our volunteers who joined the rescue operations during Typhoon Ondoy</i> [Photograph]. (n.d.). Greenpeace. https://www.greenpeace.org/static/planet4-philippines-stateless/2020/09/1e922bab-ondoy.jpg",
    "Larkin, J. (n.d.). <i>Twentieth century Philippines; Islands and cities </i>[Map]. JSTOR. https://www-jstor-org.dlsu.idm.oclc.org/page-scan-delivery/get-page-scan/1864158/1",
    "<i>Malnutrition girl a victim of the Japanese occupation of WWII</i> [Photograph]. (n.d.). https://live.staticflickr.com/852/43881920981_a9eea9031a_b.jpg",
    "Martinez, F. L. (n.d.). <i>Indio zacatero </i>[Photograph]. https://philippinestudies.uk/mapping/files/fullsize/c36ada73da26c1acd8c9deec6b0ae2ad.jpg",
    "<i>Men from Baseco, a slum in the port area of Manila, the Philippines, show their scars from kidney sales in a photograph </i>[Photograph]. (1999). New Internationalist. https://newint.org/sites/default/files/features/2014/04/14/men-with-scars-590.jpg",
    "National Commission for Culture and the Arts. (n.d.). <i>Filipino First policy </i>[Photograph]. Flickr. https://live.staticflickr.com/498/17821504924_0bf335a75c_b.jpg",
    "<i>Natives, probably Tagalog alipin (slaves). Boxer Codex</i> [Photograph]. (n.d.). The Aswang Project. https://www.aswangproject.com/wp-content/uploads/2018/05/Tagalogs-Class-Structure-Philippines.jpg",
    "<i>Navío Nuestra Señora del Pilar de Zaragoza, 50-guns 1732-1750. A Manila Galleon of the eighteenth century</i> [Photograph]. (n.d.). Weapons and Warfare. https://weaponsandwarfare.files.wordpress.com/2019/03/gfxbgbxfgf.jpg",
    "<i>Oscar Underwood </i>[Photograph]. (n.d.). https://en.wikipedia.org/wiki/Revenue_Act_of_1913#/media/File:Oscar_Underwood.jpg",
    "<i>Painting by Fernando Amorsolo</i> [Painting]. (n.d.). FilipiKnow. https://www.filipiknow.net/wp-content/uploads/2014/11/Women-in-the-Precolonial-Philippines1.jpg",
    "<i>President Diosdado Macapagal signs the first leasehold contract in Plaridel Bulacan in front of a crowd of tenant farmers and landowners</i> [Photograph]. (n.d.). new mandala. https://www.newmandala.org/wp-content/uploads/2019/03/President-Diosdado-Macapagal-signs-the-first-leasehold-contract-in-Plaridel-Bulacan-in-front-of-a-crowd-of-tenant-farmers-and-landowners-on-July-4-1964-1024x685.jpg",
    "<i>President Ferdinand Marcos with his wife Imelda, during a visit of US President Richard Nixon and his wife Pat in 1969, before the end of Marcos' first term</i> [Photograph]. (n.d.). https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Ferdinand_and_Imelda_Marcos_with_the_Nixons.jpg/440px-Ferdinand_and_Imelda_Marcos_with_the_Nixons.jpg",
    "<i>Rep. Sereno E. Payne of New York </i>[Photograph]. (n.d.). https://commons.wikimedia.org/wiki/File:SerenoEPayne.jpg",
    "<i>A scene from Fields Avenue, the red light district in Angeles City, notorious for its sex tourism. In the wake of typhoons, women and girls wind up in the sex trade after being displaced by storms</i> [Photograph]. (n.d.). The groundtruth Project. https://d3oj2y7irryo5z.cloudfront.net/wp-content/uploads/2016/12/fields-avenue-1024x683.jpg",
    "<i>Secretary of State William Day signs the treaty ending the Spanish-American War in the Cabinet Room of the White House as President McKinley and other members of the Cabinet look on</i> [Photograph]. (n.d.). Daily Mail. https://i.dailymail.co.uk/i/pix/2014/02/08/article-2554703-1B4C586A00000578-192_634x502.jpg",
    "<i>Senator Jose P. Laurel shakes hands with U.S. Assistant Secretary of State Walter S. Robertson as James M. Langley smiles in the background</i> [Photograph]. (n.d.). The Kahimyang Project. https://kahimyang.com/resources-9/laurel-langley.jpg",
    "<i>St. Luke’s Hospital School of Nursing (Class 1914) </i>[Photograph]. (n.d.). Nurseslabs. https://nurseslabs.com/wp-content/uploads/2015/05/SLHNgradl.jpg",
    "[Photograph]. (n.d.). TimeGraphics. https://time.graphics/uploadedFiles/500/48/f5/48f5dda0094a79f3c23f597d40a36ead.jpg",
    "Torres, J. (n.d.).<i> Sumuroy rebellion </i>[Photograph]. Galerie Joaquin. https://galeriejoaquin.com/images/paintings_big/NEWA-6.jpg",
    "<i>“FM Declares Martial Law”—the headline of the September 24, 1972 issue of the Sunday Express, which was the Sunday edition of Philippines Daily Express </i>[Photograph]. (n.d.). Official Gazette. https://www.officialgazette.gov.ph/images/uploads/FM-Declares-Martial-law-596x720.jpg"
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
      <Divider></Divider>
      <Center my={20}>
        <Title order={1}>Image References</Title>
      </Center>
      <Group direction="column" spacing={6} mb={40}>
        {imageReferenceList.map((item, index) => (
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
