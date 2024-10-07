'use client'

import React, { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RefreshCw, Copy, AlertTriangle } from "lucide-react"
import * as bip39 from 'bip39'

export function MnemonicGeneratorJsx() {
  const [mnemonic, setMnemonic] = useState('')
  const [copied, setCopied] = useState(false)

  const generateMnemonic = () => {
    const newMnemonic = bip39.generateMnemonic()
    setMnemonic(newMnemonic)
    setCopied(false)
  }

  useEffect(() => {
    generateMnemonic()
  }, [])

  const copyToClipboard = () => {
    navigator.clipboard.writeText(mnemonic).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    (<div className="container mx-auto p-4">
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Mnemonic Generator</CardTitle>
          <CardDescription>Generate a secure mnemonic phrase for your crypto wallet</CardDescription>
        </CardHeader>
        <CardContent>
          <Alert variant="warning" className="mb-4">
            <AlertTriangle className="h-4 w-4" />
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              Keep this mnemonic phrase secret and safe. Anyone with access to it can control your wallet.
            </AlertDescription>
          </Alert>
          <div className="bg-muted p-4 rounded-md">
            <h3 className="text-lg font-semibold mb-2">Your Mnemonic Phrase:</h3>
            <div className="grid grid-cols-3 gap-2 sm:grid-cols-4">
              {mnemonic.split(' ').map((word, index) => (
                <div key={index} className="bg-background p-2 rounded border text-center">
                  <span className="text-muted-foreground text-sm mr-1">{index + 1}.</span>
                  {word}
                </div>
              ))}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={generateMnemonic}>
            <RefreshCw className="mr-2 h-4 w-4" /> Regenerate
          </Button>
          <Button onClick={copyToClipboard}>
            <Copy className="mr-2 h-4 w-4" /> {copied ? 'Copied!' : 'Copy to Clipboard'}
          </Button>
        </CardFooter>
      </Card>
    </div>)
  );
}