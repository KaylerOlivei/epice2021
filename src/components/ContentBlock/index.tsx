import React from 'react';
import {
  Box, Container, Text, Heading,
  Stack, SimpleGrid, Avatar, Center
} from '@chakra-ui/react';
import { Fade } from 'react-awesome-reveal'
import { palestrantes } from '../../content/palestrantes'
const Palestrantes: React.FC = () => {
  return (
    <Box as="section" id="palestras">
      <Box>
        <Container py="80px" textAlign="center">
          <Heading
            color="teal.400"
            textStyle="heading"
            mb="5"
            fontWeight="bold"
            fontSize="5xl"
          >
            Palestrantes
          </Heading>
          <Text maxW="56ch" mx="auto" fontSize="lg">
            Pessoas incríveis que contribuíram com tempo,
            esforço e pensamento. Sem eles,
            este projeto não seria possível.
          </Text>
        </Container>
      </Box>
      <Box mb="60px" as="section">
        <Container maxWidth="150ch">
          <Stack spacing={8}>
            <SimpleGrid columns={[1, 1, 2]} spacing="40px" pt="3">
              {palestrantes.map((member) => (
                <Fade>
                  <Box borderLeftWidth="4px" borderLeftColor="purple.500" padding="7px" borderRadius="4px" key={member.id}>
                    <Stack direction="column" spacing={6} textAlign="center">
                      <Center>
                        <Avatar
                          size="2xl"
                          src={member.avatar}
                          name={member.name}
                          borderColor="purple.500"
                          borderWidth={4}
                        />
                      </Center>
                      <Stack spacing={3}>
                        <Text fontWeight="bold" fontSize="md">
                          {member.name}
                        </Text>
                        <Text dangerouslySetInnerHTML={{
                          __html: member.frase
                        }} />
                      </Stack>
                    </Stack>
                  </Box>
                </Fade>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}

export default Palestrantes