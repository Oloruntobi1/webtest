import Header from './Header';
import Steps from './Steps';

const STEPS = [
  {
    id: 1,
    caption: 'Step 1',
    title: 'Understand your talent needs',
    description:
      'Our matching team takes a deep dive into your technical needs, culture, and long-term goals.',
    image: 'step-1.png',
  },
  {
    id: 2,
    caption: 'Step 2',
    title: 'Find matches in our network',
    description:
      'We map your requirements to our network, and quickly shortlist the best candidates with our best-in-class matching algorithm.',
    image: 'step-2.png',
  },
  {
    id: 3,
    caption: 'Step 3',
    title: 'Review candidates together',
    description:
      'We review shortlisted candidates with you to find the perfect fit.',
    image: 'step-3.png',
  },
  {
    id: 4,
    caption: 'Step 4',
    title: 'Get ready for remote',
    description:
      'Once matched, we ensure each engineer has the tools, equipment, and infrastructure they need to work remotely on your teams.',
    image: 'step-4.png',
  },
  {
    id: 5,
    caption: 'Step 5',
    title: 'Facilitate onboarding',
    description:
      'Helping our clients onboard engineers is just something we do. We have facilitated remote onboarding for thousands of engineers on hundreds of teams.',
    image: 'step-5.png',
  },
];

export default function OurProcess() {
  return (
    <>
      <Header />
      {STEPS.map((step, i) => (
        <Steps key={step.id} data={step} inverted={i % 2 === 0} />
      ))}
    </>
  );
}
