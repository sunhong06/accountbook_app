import Image from 'next/image';
import logoImg from '../../../public/imgs/logo.png';

interface LogoProps {
  width: number;
  height: number;
}

const Logo = ({ width, height }: LogoProps) => {
  return <Image src={logoImg} width={width} height={height} alt='logo' placeholder='blur' />;
};

export default Logo;
