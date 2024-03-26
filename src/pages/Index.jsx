import React from "react";
import { Box, VStack, HStack, Heading, Text, Image, SimpleGrid, Link, IconButton } from "@chakra-ui/react";
import { FaInstagram, FaFacebook, FaEnvelope } from "react-icons/fa";

const Index = () => {
  const photos = ["https://images.unsplash.com/photo-1603775020644-eb8decd79994?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwb3J0cmFpdCUyMHBob3RvZ3JhcGh5fGVufDB8fHx8MTcxMTQ5MjAzNXww&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1604430456280-43f652c497aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGUlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3MTE0OTIwMzZ8MA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1599557041284-7e2a15610388?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHJlZXQlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3MTE0OTIwMzZ8MA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/flagged/photo-1552981941-424aac2b4311?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzExNDkyMDM2fDA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1579504344957-c09070053c7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjBwaG90b2dyYXBoeXxlbnwwfHx8fDE3MTE0OTIwMzd8MA&ixlib=rb-4.0.3&q=80&w=1080", "https://images.unsplash.com/photo-1601597565151-70c4020dc0e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwcGhvdG9ncmFwaHl8ZW58MHx8fHwxNzExNDkyMDM4fDA&ixlib=rb-4.0.3&q=80&w=1080"];

  return (
    <Box>
      <VStack spacing={8} align="center" py={12} px={4}>
        <Heading as="h1" size="2xl">
          Chen Kalimi Photography
        </Heading>
        <Text fontSize="xl" textAlign="center" maxW="600px">
          Capturing life's precious moments through the lens. Browse through my portfolio and feel free to reach out for any inquiries.
        </Text>
        <HStack spacing={4}>
          <Link href="https://www.instagram.com/chenkalimi" isExternal>
            <IconButton icon={<FaInstagram />} aria-label="Instagram" size="lg" variant="ghost" />
          </Link>
          <Link href="https://www.facebook.com/chenkalimiphotography" isExternal>
            <IconButton icon={<FaFacebook />} aria-label="Facebook" size="lg" variant="ghost" />
          </Link>
          <Link href="mailto:chen@chenkalimi.com">
            <IconButton icon={<FaEnvelope />} aria-label="Email" size="lg" variant="ghost" />
          </Link>
        </HStack>
      </VStack>

      <SimpleGrid columns={[1, 2, 3]} spacing={4} px={4} py={8}>
        {photos.map((photo, index) => (
          <Image key={index} src={photo} alt={`Photography ${index + 1}`} objectFit="cover" w="100%" h={["300px", "400px"]} borderRadius="md" shadow="md" />
        ))}
      </SimpleGrid>

      <Box textAlign="center" py={8}>
        <Text fontSize="xl">
          For bookings and inquiries, please email me at{" "}
          <Link href="mailto:chen@chenkalimi.com" color="blue.500">
            chen@chenkalimi.com
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default Index;
