//
//  ReactViewController.swift
//  Boilerplate
//
//  Created by Dylan Gyesbreghs on 27/07/2018.
//  Copyright © 2018 icapps. All rights reserved.
//

import UIKit

class ReactViewController: UIViewController, ReactController {

    override func loadView() {
        super.loadView()
        guard let mainComponentMain = mainComponentMain, let bundleURL = RCTBundleURLProvider.sharedSettings().jsBundleURL(forBundleRoot: "index", fallbackResource: "") else { return }
        let initialProperties = [AnyHashable: Any]()
        let launchOptions = [AnyHashable: Any]()
        self.view = RCTRootView(bundleURL: bundleURL, moduleName: mainComponentMain, initialProperties: initialProperties, launchOptions: launchOptions)
    }
    
    var mainComponentMain: String? {
        return nil
    }
    
}
