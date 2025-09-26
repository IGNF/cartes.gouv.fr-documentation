CREATE TABLE installation (
    id SERIAL PRIMARY KEY,
    nom_ets character varying(254),
    adresse character varying(207),
    commune character varying(50),
    lib_regime character varying(50),
    url_fiche character varying(80),
    lib_seveso character varying(20),
    geom geometry(Point,4326)
);

CREATE VIEW installation_autorisation AS SELECT * FROM installation WHERE lib_regime = 'Autorisation';

CREATE INDEX ON installation (lib_regime);