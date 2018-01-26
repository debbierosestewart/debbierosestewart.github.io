import './design.css';

import React from 'react';
import {GridList, GridTile} from 'material-ui/GridList';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
  },
};

const tilesData = [
  {
    img: 'grid/ecosystems.png',
    title: 'Ecosystems',
    link: "5th_Grade_Ecosystems.pdf"
  },
  {
    img: 'grid/geometry.png',
    title: 'Geometry',
    link: "5th_Grade_Geometry.pdf"
  },
  {
    img: 'grid/point_of_view.png',
    title: 'Point of View',
    link: "5th_Grade_ELA_Point_of_View.pdf"
  },
];

const motivatorData = [
  { img: 'grid/1.jpg' },
  { img: 'grid/2.jpg' },
  { img: 'grid/3.jpg' },
  { img: 'grid/4.jpg' },
]

const DesignComponent = () => (
  <div className="design">
    <p className="headline">Work Samples</p>
    <div style={styles.root}>
      <GridList cellHeight={180} spacing={100} cols={1} style={styles.gridList}>
        {tilesData.map((tile) => (
          <GridTile key={tile.img} title={tile.title}>
            <a target="_blank" href={tile.link}>
              <img width="400px" src={tile.img} alt={tile.title} />
            </a>
          </GridTile>
        ))}
      </GridList>
    </div>

    <br /><br /><br />
    <p className="headline">Motivators</p>
    <div style={styles.root}>
      <GridList cellHeight={180} spacing={100} cols={1} style={styles.gridList}>
        {motivatorData.map((tile) => (
          <GridTile key={tile.img}>
            <a target="_blank" href={tile.img}>
              <img width="400px" src={tile.img} alt={tile.img} />
            </a>
          </GridTile>
        ))}
      </GridList>
    </div>
  </div>
);

export default DesignComponent;
