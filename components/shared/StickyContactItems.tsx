import Image from "next/image";
import { normalizedPath } from "../../lib/utils";

export default function StickyContactItems() {
    return (
        <div className="fixed right-0 top-1/3">
          <span onClick={() => window.open('mailto:kurashiva11@gmail.com', '_blank')}><Image src={normalizedPath("/gmail.png")} alt="gmail" width={48} height={48} /></span>
          <div className="h-1" />
          <span onClick={() => window.open('tel:8096243936', '_blank')}><Image src={normalizedPath("/telephone.png")} alt="phone" width={39} height={39} /></span>
          <div className="h-1" />
          <span onClick={() => window.open('https://api.whatsapp.com/send?phone=918096243936', '_blank')}><Image src={normalizedPath("/whatsapp.svg")} alt="whatsapp" width={48} height={48} /></span>
        </div>
    );
}