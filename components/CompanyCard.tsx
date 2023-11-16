import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CompanyCard = ({ companies }: any) => {
  const hello = "hello";
  console.log(hello);
  return (
    <section className="mb-6 flex flex-wrap justify-between w-7/10">
        {companies.map((company: any) => (
          <div key={company.id} className="w-full md:w-1/3 p-4">
            <Card className="mb-6 px-3" key={company.id}>
            <CardHeader>
              <CardTitle>{company.attributes.name}</CardTitle>
            </CardHeader>
          </Card>
          </div>
        ))}
      </section>
  );
};

export default CompanyCard;