import './styles/theme.css';
import './styles/global.css';

import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export function App() {
  return (
    <>
      <Heading>
        Hello World!
        <button>
          <TimerIcon />
        </button>
      </Heading>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima
        consectetur ad est debitis praesentium aliquam tempore commodi eum porro
        perferendis magnam voluptate odit, culpa voluptas officia consequatur
        molestiae. Quo, veritatis?
      </p>
    </>
  );
}
