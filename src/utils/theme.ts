const size = {
  mobile: '770px',
};

export interface ThemeType {
  primary: {
    normal: string;
    lighter: string;
    sub: string;
  };
  background: {
    initial: string;
  };
  textColor: {
    initial: string;
    contrast: string;
    primary: string;
    alert: string;
  };
  layerColor: {
    modalLayer: string;
  };
  viewPortSize: {
    mobile: string;
  };
}

const theme: ThemeType = {
  primary: {
    normal: '#8c30f5',
    lighter: '#f1e4ff',
    sub: '#eebd83',
  },
  background: {
    initial: '#fff',
  },
  textColor: {
    initial: '#000',
    contrast: '#fff',
    primary: '#8c30f5',
    alert: '#c62828',
  },
  layerColor: {
    modalLayer: 'rgba(30,30,30,.7)',
  },
  viewPortSize: {
    mobile: `(max-width: ${size.mobile})`,
  },
};

export default theme;
