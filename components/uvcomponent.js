import React from 'react';
import { Component } from "react";

export default class UVComponent extends Component {

    uvEl;
    uv;
    uvstate;
    urlDataProvider;

	constructor(props) {
        super(props);
    }

    openManifest() {

        // show the UV (if hidden) and scroll into view
        this.uvEl.style.display = 'block';
        this.uvEl.scrollIntoView();

        this.uv.set(Object.assign({}, this.uvstate, {
            collectionIndex: 0,
            manifestIndex: 0,
            sequenceIndex: 0,
            canvasIndex: 0
        }));
    }

    componentDidMount() {

        var that = this;

        window.addEventListener('uvLoaded', function (e) {

            that.urlDataProvider = new UV.URLDataProvider();

            that.uvstate = {
                root: that.props.root,
                configUri: that.props.configUri,
                locales: [{ name: 'en-GB' }],
                iiifResourceUri: '',
                collectionIndex: Number(that.urlDataProvider.get('c', 0)),
                manifestIndex: Number(that.urlDataProvider.get('m', 0)),
                sequenceIndex: Number(that.urlDataProvider.get('s', 0)),
                canvasIndex: Number(that.urlDataProvider.get('cv', 0)),
                rotation: Number(that.urlDataProvider.get('r', 0)),
                xywh: that.urlDataProvider.get('xywh', '')
            }
        
            that.uvEl = document.querySelector('#uv');
            that.uv = createUV(that.uvEl, that.uvstate, that.urlDataProvider);
        
            that.uv.on('created', function () {
                Utils.Urls.setHashParameter('manifest', that.uvstate.iiifResourceUri);
            });

            // are there uv hash parameters?
            that.uvstate.iiifResourceUri = Utils.Urls.getHashParameter('manifest');
        
            if (that.uvstate.iiifResourceUri) {
                that.openManifest();
            }
        
        }, false);
    }

    componentWillReceiveProps(nextProps) {
        // if it's not the initial props, and a manifest has been set
        if (this.uvstate && nextProps.manifest) {
            this.uvstate.iiifResourceUri = nextProps.manifest;
            this.openManifest();
        }
    }

    render() {
		return (
			<div id="uv" class="uv"></div>
        )
    }

}