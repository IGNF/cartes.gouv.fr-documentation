ALTER TABLE ecoregions ADD COLUMN test_add_column integer; 

UPDATE ecoregions
   SET test_add_column = nnh * {{ params.multiply }};
