module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/main',
      Nav: 'app/components/nav',
      Weather: 'app/components/weather',
      About: 'app/components/about',
      Examples: 'app/components/examples',
      FormComponent: 'app/components/form_component',
      WeatherMessage: 'app/components/weather_message',
      openWeatherMap: 'app/api/open_weather_map'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
}
