import React from 'react';
import Feature from './Feature';
import styles from './index.module.scss';

export interface FeatureProps {
  leftComponent?: any;
  rightComponent?: any;
  styles?: any;
}
export interface FeatureSectionProps {
  title?: string;
  description?: string;
  features?: FeatureProps[];
  theme?: string;
}

export default function FeatureSection({
  title,
  description,
  features,
}: FeatureSectionProps) {
  return (
    <div className={styles['description-wrapper']}>
      <div className={styles['title']}>
        <p>{title}</p>
      </div>
      {features &&
        features.map((feature: any) => (
          <Feature
            position={feature.styles}
            left={feature.leftComponent}
            right={feature.rightComponent}
          />
        ))}
    </div>
  );
}