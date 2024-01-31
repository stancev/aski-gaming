import { Separator } from '@/components/ui/separator';

interface Props {
  data: string[];
}

const Achievements: React.FC<Props> = ({ data }) => {
  const achievements = data.map((item, index) => (
    <div key={index} className="flex">
      <p className="me-4 whitespace-nowrap text-sm text-primary">{item}</p>
      {index !== data.length - 1 && (
        <Separator orientation="vertical" className="h-[18px] bg-primary" />
      )}
    </div>
  ));

  return achievements;
};

export default Achievements;
