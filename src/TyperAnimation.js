import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { useNavigate } from 'react-router-dom';
import "./styles/landing.css";

const TyperAnimation = () => {
  const history = useNavigate();
  const [animationComplete, setAnimationComplete] = useState(false);

  const onAnimationComplete = React.useCallback(() => {
    history('/index');
  }, [history]);

  useEffect(() => {
    if (animationComplete) {
      onAnimationComplete();
    }
  }, [animationComplete, onAnimationComplete]);

  return (
        <div class="bg-dkblue">
            <div class="typer">
                    <TypeAnimation
                        style={{ position: 'absolute', whiteSpace: 'pre-line', height: '195px', color: 'white', fontSize: '1.4rem', fontFamily: 'monospace' }}
                        sequence={[
                            `
                            >> Hmm . . . So you wanna know who Kaushik is?\n
                            >> Well he's the only person who could win an argument against a brick wall.\n 
                            >> (Spoiler alert: He already has!)\n
                            >> I bet you're smiling right now ;)\n
                            >> Ready to meet Kaushik?\n
                            >> Presenting, Me!
                            `,
                            2000,
                            () => {
                                setAnimationComplete(true);
                            },
                        ]}
                        speed={68}
                    />
            </div>
        </div>
  );
};

export default TyperAnimation;
