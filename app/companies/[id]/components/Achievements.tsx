import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
interface Props {
  data: string[];
  iconSrc?: string;
}

const Achievements: React.FC<Props> = ({ data, iconSrc }) => {
  const achievements = data.map((item, index) => (
    <div key={index} className="flex">
      {iconSrc && (
        <Image alt="achievement icon" src={iconSrc} height={20} width={20} className="mr-2" />
      )}
      <p className="me-4 whitespace-nowrap text-sm text-primary">{item}</p>
      {index !== data.length - 1 && (
        <Separator orientation="vertical" className="h-[18px] bg-primary" />
      )}
    </div>
  ));

  return achievements;
};

export default Achievements;
