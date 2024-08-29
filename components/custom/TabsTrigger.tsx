import { TabsTrigger } from "@radix-ui/react-tabs";

// TODO: It might be good to type props
function CustomTabsTrigger({ ...props }) {
  return (
    <TabsTrigger className="group" value={props.value}>
      {props.children}
      <div className="hidden h-[2px] bg-primary rounded-lg group-data-[state=active]:block" />
    </TabsTrigger>
  );
}

export { CustomTabsTrigger };
