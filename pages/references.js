import { Center, Group, Text, Title } from "@mantine/core";

function References() {
  const referenceList = [
    "https://escholarship.org/content/qt7kz776js/qt7kz776js.pdf",
    "https://www-jstor-org.dlsu.idm.oclc.org/stable/25222372",
    "https://archive.org/details/LookingForThePrehispanicFilipino/page/n5/mode/2up",
    "https://en.wikipedia.org/wiki/History_of_Spanish_slavery_in_the_Philippines",
    "https://onlinelibrary.wiley.com/doi/pdf/10.1111/j.1467-8446.2004.00124.x",
    "http://classic.austlii.edu.au/au/journals/AUSocLegPhilB/1994/10.pdf",
    "https://www-jstor-org.dlsu.idm.oclc.org/stable/2755708",
    "http://www.pilipino-express.com/history-a-culture/in-other-words/251-maharlika-and-the-ancient-class-system.html",
    "https://www-jstor-org.dlsu.idm.oclc.org/stable/42632521",
    "https://www-jstor-org.dlsu.idm.oclc.org/stable/25106355?seq=1",
    "https://www.tandfonline.com/doi/pdf/10.1080/14672715.1968.10405159?needAccess=true",
    "https://www.econ.upd.edu.ph/dp/index.php/dp/article/view/109/161",
    "https://www-jstor-org.dlsu.idm.oclc.org/stable/1864158",
    "https://eric.ed.gov/?id=ED407968",
    "http://www.thepinoywarrior.com/2012/01/spanish-filipino-caste-system.html",
    "https://utsynergyjournal.org/2022/02/06/ilustrado-revolutionaries-or-accomplices-of-the-spanish-empire-the-contestedinfluence-of-filipino-ilustrados-on-philippine-national-independence-1872-1898/",
    "https://www.researchgate.net/profile/Jomari-Tabucanon/publication/356892518_A_Reflection_Paper_on_Renato_Constantino's_The_Philippines_A_Past_Revisited/links/61b197b24d7ff64f05369ba5/A-Reflection-Paper-on-Renato-Constantinos-The-Philippines-A-Past-Revisited.pdf",
    "https://ideas.repec.org/p/phs/dpaper/200307.html",
    "https://www.jstor.org/stable/20071870",
    "https://www.globalcitizen.org/en/content/philippines-poverty-covid-19/",
  ];

  return (
    <div style={{ maxWidth: "1080px", margin: "auto" }}>
      <Center my={20}>
        <Title order={1}>References</Title>
      </Center>
      <Group direction="column" spacing={6} mb={40}>
        {referenceList.map((item, index) => (
          <Text key={index}>[{index + 1}] {item} </Text>
        ))}
      </Group>
    </div>
  );
}

export default References;
