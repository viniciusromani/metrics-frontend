import { TabsContent } from "@radix-ui/react-tabs";

// TODO: It might be good to type props
function CustomTabsContent({ ...props }) {
  return (
    <TabsContent className="animate-in fade-in" value={props.value}>
      {props.children}
    </TabsContent>
  );
}

export { CustomTabsContent };
