import React from "react";
import { cn } from "@utils";
import { Wrapper, Grid, Text, Icon } from "@components";

export interface FooterProps {
  className?: string;
}

export const Footer = ({ className }: FooterProps) => {
  // I need mock data to style the footer. Give me an array of objects. Each object should consist of a title and 3-5 links that consist of a label and an URL.
  const footerData = [
    {
      title: "About",
      links: [
        { label: "About Us", url: "#" },
        { label: "Our Team", url: "#" },
        { label: "Careers", url: "#" },
        { label: "Blog", url: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Our Services", url: "#" },
        { label: "Pricing", url: "#" },
        { label: "FAQ", url: "#" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "LinkedIn", url: "https://fabianheussner.com" },
        { label: "Portfolio", url: "https://fabianheussner.com" },
        { label: "Dribbble", url: "https://fabianheussner.com" },
      ],
    },
  ];
  return (
    <footer className={cn("pt-20 pb-40", className)}>
      <Wrapper indent="Default" border="None">
        <Grid columns="EqualThree">
          {/* <p className="text-textVariant">© 2021</p> */}
          {footerData.map((item) => (
            <div key={item.title}>
              <Text tag="h6" size="BodySm" color="Subdued">
                {item.title}
              </Text>
              <ul>
                {item.links.map((link) => (
                  <li key={link.label} className="mt-3">
                    <a
                      href={link.url}
                      target={
                        link.url.startsWith("http") ? "_blank" : undefined
                      }
                      className="flex flex-row items-center gap-x-1 group transition-all duration-300"
                    >
                      <Text size="BodySm" className="group-hover:text-blue-400">
                        {link.label}
                      </Text>
                      {link.url.startsWith("http") && (
                        <Icon name="ArrowUpRight" size={16} />
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Grid>
      </Wrapper>
    </footer>
  );
};
