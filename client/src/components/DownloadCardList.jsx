import { SimpleGrid, Card, CardBody, Text, Link } from "@chakra-ui/react";

const DownloadCardList = ({ title, formats }) => {
  const getVideoType = (type) => {
    const indexOfColon = type.indexOf(";");
    return type.slice(0, indexOfColon);
  };

  return (
    <>
      {title && (
        <Text fontWeight="700" fontSize="2xl" mt="10">
          Title: {title}
        </Text>
      )}
      <SimpleGrid
        mt="20px"
        columns={{
          base: 1,
          md: 2,
          lg: 3,
          xl: 4,
        }}
        spacing="10px"
      >
        {formats.map(({ qualityLabel, quality, url, mimeType }, index) => (
          <Link key={index} href={url} title="Click to download.">
            <Card
              borderLeft="6px solid green"
              borderLeftRadius="10px"
              shadow="lg"
              cursor="pointer"
              background="green.500"
            >
              <CardBody>
                <Text>
                  {qualityLabel ? qualityLabel : quality} -
                  {" " + getVideoType(mimeType)}
                </Text>
              </CardBody>
            </Card>
          </Link>
        ))}
      </SimpleGrid>
    </>
  );
};

export default DownloadCardList;
