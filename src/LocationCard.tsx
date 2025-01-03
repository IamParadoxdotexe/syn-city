import React from 'react';
import './LocationCard.css';
import { ReactComponent as LockIcon } from './icons/Lock.svg';
import { ReactComponent as SkullIcon } from './icons/Skull.svg';
import { ReactComponent as WarningIcon } from './icons/Warning.svg';
import { ReactComponent as EnergyIcon } from './icons/Energy.svg';
import { ReactComponent as UpgradeIcon } from './icons/Upgrade.svg';
import { ReactComponent as ResourceIcon } from './icons/Resource.svg';
import { useImage } from './util/hooks/useImage';
import { toPng } from 'html-to-image';
import download from 'downloadjs';
import LocationBackImage from './images/location-back.png';

type LocationBarrier = 'D' | 'E' | 'H';

export type LocationCardDefinition = {
  id: string;
  name: string;
  barriers: LocationBarrier[];
  energyCount: number;
  upgradeCount: number;
  resourceCount: number;
};

const BARRIER_COLORS: {
  [key in LocationBarrier]: string;
} = {
  D: '#D4FF6F',
  E: '#CA84FF',
  H: '#3EFDD7',
};

const BARRIER_ICONS: {
  [key in LocationBarrier]: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
} = {
  D: LockIcon,
  E: SkullIcon,
  H: WarningIcon,
};

type LocationCardProps = {
  definition: LocationCardDefinition;
  back?: boolean;
  style?: React.CSSProperties;
};

export const LocationCard: React.FC<LocationCardProps> = (props) => {
  const elementId = `L${props.definition.id}`;
  const image = useImage(`locations/${props.definition.id}.png`);

  if (props.back) {
    return (
      <div className="locationCard">
        <img src={LocationBackImage} style={{ margin: -76 }} alt='' />
      </div>
    );
  }

  return (
    <div
      id={elementId}
      className="locationCard"
      style={props.style}
      onClick={() => {
        toPng(document.getElementById(elementId)!, {
          pixelRatio: 1,
        }).then((dataUrl) => download(dataUrl, `${elementId}[face,1].png`));
      }}
    >
      <div className="locationCard__safeZone">
        <div
          className="safeZone__content"
          style={{
            backgroundImage: image && `url("${image}")`,
          }}
        >
          <div className="content__uncovered">
            <div className="content__name">{props.definition.name}</div>

            <div className="content__barriers">
              {props.definition.barriers.map((barrier, i) => {
                const BarrierIcon = BARRIER_ICONS[barrier];
                return <BarrierIcon key={i} style={{ color: BARRIER_COLORS[barrier] }} />;
              })}
            </div>
          </div>

          <div className="content__covered">
            <div className="content__energy">
              <div className="energy__count">
                {props.definition.energyCount}
                <div>x</div>
              </div>
              <EnergyIcon />
            </div>

            <div className="content__rewards">
              {[...new Array(props.definition.upgradeCount)].map((_, i) => (
                <UpgradeIcon key={i} style={{ color: '#3E8EFD' }} />
              ))}
              {[...new Array(props.definition.resourceCount)].map((_, i) => (
                <ResourceIcon key={i} style={{ color: '#e7e7e7' }} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
