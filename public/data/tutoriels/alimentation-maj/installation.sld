<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<StyledLayerDescriptor version="1.0.0" xsi:schemaLocation="http://www.opengis.net/sld StyledLayerDescriptor.xsd" xmlns="http://www.opengis.net/sld" xmlns:ogc="http://www.opengis.net/ogc" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">
  <NamedLayer>
    <Name>QGIS Style</Name>
    <UserStyle>
      <Name>QGIS Style</Name>
      <Title>QGIS Style</Title>
      <FeatureTypeStyle>
        <Rule>
          <Name>lib_seveso = Non Seveso</Name>
          <Filter xmlns="http://www.opengis.net/ogc">
            <PropertyIsEqualTo>
              <PropertyName>lib_seveso</PropertyName>
              <Literal>Non Seveso</Literal>
            </PropertyIsEqualTo>
          </Filter>
          <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>diamond</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#D636B4</CssParameter>
                </Fill>
                <Stroke>
                  <CssParameter name="stroke">#801119</CssParameter>
                  <CssParameter name="stroke-width">0.4</CssParameter>
                  <CssParameter name="stroke-opacity">1</CssParameter>
                </Stroke>
              </Mark>
              <Opacity>1</Opacity>
              <Size>15</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>lib_seveso = Seveso seuil bas</Name>
          <Filter xmlns="http://www.opengis.net/ogc">
            <PropertyIsEqualTo>
              <PropertyName>lib_seveso</PropertyName>
              <Literal>Seveso seuil bas</Literal>
            </PropertyIsEqualTo>
          </Filter>
          <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>diamond</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#4F76D2</CssParameter>
                </Fill>
                <Stroke>
                  <CssParameter name="stroke">#801119</CssParameter>
                  <CssParameter name="stroke-width">0.4</CssParameter>
                  <CssParameter name="stroke-opacity">1</CssParameter>
                </Stroke>
              </Mark>
              <Opacity>1</Opacity>
              <Size>15</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>lib_seveso = Seveso seuil haut</Name>
          <Filter xmlns="http://www.opengis.net/ogc">
            <PropertyIsEqualTo>
              <PropertyName>lib_seveso</PropertyName>
              <Literal>Seveso seuil haut</Literal>
            </PropertyIsEqualTo>
          </Filter>
          <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>diamond</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#3BDD5B</CssParameter>
                </Fill>
                <Stroke>
                  <CssParameter name="stroke">#801119</CssParameter>
                  <CssParameter name="stroke-width">0.4</CssParameter>
                  <CssParameter name="stroke-opacity">1</CssParameter>
                </Stroke>
              </Mark>
              <Opacity>1</Opacity>
              <Size>15</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
        <Rule>
          <Name>lib_seveso = </Name>
          <Filter xmlns="http://www.opengis.net/ogc">
            <PropertyIsEqualTo>
              <PropertyName>lib_seveso</PropertyName>
              <Literal/>
            </PropertyIsEqualTo>
          </Filter>
          <PointSymbolizer>
            <Graphic>
              <Mark>
                <WellKnownName>diamond</WellKnownName>
                <Fill>
                  <CssParameter name="fill">#DCAA35</CssParameter>
                </Fill>
                <Stroke>
                  <CssParameter name="stroke">#801119</CssParameter>
                  <CssParameter name="stroke-width">0.4</CssParameter>
                  <CssParameter name="stroke-opacity">1</CssParameter>
                </Stroke>
              </Mark>
              <Opacity>1</Opacity>
              <Size>15</Size>
            </Graphic>
          </PointSymbolizer>
        </Rule>
      </FeatureTypeStyle>
    </UserStyle>
  </NamedLayer>
</StyledLayerDescriptor>