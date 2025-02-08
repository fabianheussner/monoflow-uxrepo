"use client";

import { useState } from "react";
import {
  Drawer,
  Card,
  Header,
  Grid,
  SectionHeader,
  Wrapper,
  Jumbotron,
  Button,
  Text,
} from "@components";

export default function Home() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleCardClick = () => {
    setIsDrawerOpen(true); // Open the drawer when a card is clicked
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false); // Close the drawer when requested
  };

  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="">
        <Wrapper border="Full" className="rounded-t-lg overflow-hidden">
          <Header
            title="Deliver outstanding user experiences"
            // subtitle="Monoflow UX Repo"
            subtitle="Let's grow together and"
            // copyContent="monoflow.studio"
          />
        </Wrapper>
        <Wrapper border="SideBottom" indent="Default" className="pt-10 pb-20">
          <SectionHeader title="Recently added" level="Main" hasTrailing />
          <Grid columns="EqualThree">
            <div className="col-span-2">
              <Card
                title="Feature Canvas"
                category="Method"
                date="Feb 2, 2025"
                duration="8 min"
                description="Test description"
                icon="PanelsRightBottom"
                onClick={handleCardClick}
                variant="image"
                // image="/assets/img/monoflow-value-proposition-painting.webp"
                image="/assets/img/test-2.jpg"
                className="col-span-1 h-full"
              />
            </div>
            <div className="col-span-1 flex flex-col gap-4">
              <Card
                title="Value Proposition"
                category="Framework"
                date="Jan 15, 2025"
                duration="6 min"
                description="Test description"
                icon="Circle"
                onClick={handleCardClick}
              />
              <Card
                title="A/B Testing"
                category="Method"
                date="Dec 12, 2024"
                duration="10 min"
                description="Test description"
                icon="Shapes"
                // variant="dark"
                onClick={handleCardClick}
              />
            </div>
          </Grid>
        </Wrapper>
        <Wrapper
          border="SideBottom"
          indent="Default"
          className="bg-background py-40"
        >
          <Grid columns="EqualSix">
            <div className="col-span-2 col-start-2 flex flex-col">
              <Text size="BodyLg" className="mb-4">
                About monoflow
              </Text>
              <Text size="HeadlineMd" className="mb-4">
                Monoflow is a passion project, collecting UX methods and
                insights I gained.
              </Text>
              <Text size="BodyLg" color="Subdued">
                It gives me the opportunity to grow as a designer consistently
                besides my daily work, manifest insights, and write some code.
              </Text>
              {/* <Button
                variant="tonal"
                size="small"
                trailingIcon="ArrowUpRight"
                className=""
              >
                Discover my work
              </Button> */}
            </div>
            <div className="col-span-1 col-start-5">
              <img
                src="/assets/img/fabian-heussner.png"
                className="rounded-md mb-2"
              />
              <Text size="Caption">And yes, that's me…</Text>
            </div>
          </Grid>
        </Wrapper>
        <Wrapper border="Side" indent="Default" className="pt-10 pb-20">
          <SectionHeader title="Insights and notes" level="Main" hasTrailing />
          <Grid columns="EqualThree">
            <Card
              title="User Interviews"
              category="Method"
              date="Feb 2, 2025"
              duration="8 min"
              description="Test description"
              icon="Mic"
              onClick={handleCardClick}
            />
            <Card
              title="Card Sorting"
              category="Method"
              date="Jan 15, 2025"
              duration="6 min"
              description="Test description"
              icon="Layers"
              variant="image"
              image="/assets/img/monoflow-value-proposition-painting.webp"
              onClick={handleCardClick}
            />
            <Card
              title="Market Research"
              category="Method"
              date="Jan 15, 2025"
              duration="6 min"
              description="Test description"
              icon="Users"
              // variant="dark"
              variant="image"
              image="/assets/img/test-7.jpg"
              onClick={handleCardClick}
            />
          </Grid>
        </Wrapper>
        {isDrawerOpen && <Drawer closeDrawer={handleCloseDrawer} />}
        <Wrapper border="Full">
          <Jumbotron
            title="Jumbotron test title lorem ipsum"
            action="Get started"
            actionIcon="ExternalLink"
          />
        </Wrapper>
      </main>
    </div>
  );
}
